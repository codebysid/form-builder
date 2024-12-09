"use client";
import Button from "./ui/Button";
import Icons from "./Icons";
import useCtxState from "../hooks/useCtxState";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";
import QuestionTypesDropDown from "./QuestionTypesDropDown";
import QuestionRender, { QuestionType } from "./ui/QuestionRender";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useMobileDevice from "../hooks/useMobileDevice";
import { useRouter } from "next/navigation";

const FormBody = () => {
  const state = useCtxState();
  const dispatch = useDispatch();
  const router = useRouter();
  const isMobile = useMobileDevice();
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 1000,
        tolerance: 5,
      },
    }),

    ...(isMobile
      ? [
          useSensor(PointerSensor, {
            activationConstraint: { delay: 100, tolerance: 200 },
          }),
        ]
      : [
          useSensor(MouseSensor, {
            activationConstraint: {
              distance: 10,
            },
          }),
        ])
  );

  const handleDropDownVisibility = () => {
    dispatch && dispatch({ type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!dispatch) return;
    const { active, over } = event;
    if (active.id === over?.id) return;

    const oldIndex = state?.formElements.findIndex((el, i) => i === active.id);
    const newIndex = state?.formElements.findIndex((el, i) => i === over?.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      dispatch({
        type: ACTION_TYPES.DRAG_AND_DROP,
        payload: { oldIndex, newIndex },
      });
    }
  };

  const handleViewAllForms = () => router.push("/allUserForms");

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <div className="border border-gray-200 w-10/12 lg:w-2/5 h-[83vh] overflow-y-auto flex justify-center ">
        <div className=" flex flex-col items-center justify-start w-full">
          <div className=" w-full p-4 flex flex-col gap-4">
            <SortableContext
              items={state?.formElements as []}
              strategy={verticalListSortingStrategy}
            >
              {state?.formElements.map((ques, i) => {
                return (
                  <QuestionRender
                    key={i}
                    type={ques.type as QuestionType}
                    options={ques.options}
                    index={i}
                  />
                );
              })}
            </SortableContext>
          </div>
          <div className="relative flex flex-col items-center justify-start w-full">
            <Button
              variant="outline"
              icon={<Icons name="plusIcon" />}
              iconDirection="left"
              onClick={handleDropDownVisibility}
            >
              Add Question
            </Button>
            <Button variant="ghost" onClick={handleViewAllForms}>
              View your forms
            </Button>
            {state?.isDropDownOpen && <QuestionTypesDropDown />}
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default FormBody;
