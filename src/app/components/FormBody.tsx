"use client";
import React, {
  act,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
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
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const FormBody = () => {
  const state = useCtxState();
  const dispatch = useDispatch();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
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

  // useEffect(() => {
  //   const handlePosition = () => {
  //     if (buttonRef.current && dropdownRef.current) {
  //       const buffer = 250;
  //       const buttonRect = buttonRef.current.getBoundingClientRect();
  //       const dropdownHeight = dropdownRef.current.offsetHeight;
  //       const spaceBelow = window.innerHeight - buttonRect.bottom;
  //       const spaceAbove = buttonRect.top;

  //       const effectiveSpaceBelow = spaceBelow - buffer;
  //       const effectiveSpaceAbove = spaceAbove - buffer;

  //       setIsAbove(
  //         effectiveSpaceBelow < dropdownHeight &&
  //           effectiveSpaceAbove >= dropdownHeight
  //       );
  //     }
  //   };

  //   handlePosition();
  //   window.addEventListener("resize", handlePosition);

  //   return () => {
  //     window.removeEventListener("resize", handlePosition);
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log({ isAbove });
  // }, [isAbove]);
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <div className="border border-gray-200 w-2/5 h-[83vh] overflow-y-auto flex justify-center ">
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
            {state?.isDropDownOpen && <QuestionTypesDropDown />}
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default FormBody;
