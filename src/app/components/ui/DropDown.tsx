import useDropDownAction from "@/app/hooks/useDropDownAction";
import QuestionDropDownOption from "../QuestionDropDownOption";

interface IDropDown {
  options: any[];
  label: string;
  onlyIcon?: boolean;
}

const DropDown = ({ options, label, onlyIcon = false }: IDropDown) => {
  const handleVisibility = useDropDownAction({
    id: label.split(" ").join("_"),
  });
  console.log(label.split(" ").join("_"));
  return (
    <>
      {!onlyIcon && (
        <p className=" text-xs font-semibold text-xGray py-2">
          {label.toUpperCase()}
        </p>
      )}
      <div className=" flex flex-col gap-4">
        {options.map((ques) => {
          return (
            <QuestionDropDownOption
              key={ques.id}
              title={!onlyIcon ? ques.title : ""}
              iconName={ques.iconName}
              handleVisibility={handleVisibility}
            />
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
