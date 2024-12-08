import QuestionDropDownOption from "../QuestionDropDownOption";

interface IDropDown {
  options: any[],
  label: string
}

const DropDown = ({ options, label }: IDropDown) => {
  return (
    <>
      <p className=" text-xs font-semibold text-xGray py-2">{label.toUpperCase()}</p>
      <div className=" flex flex-col gap-4">
        {options.map((ques) => {
          return (
            <QuestionDropDownOption
              key={ques.id}
              title={ques.title}
              iconName={ques.iconName}
            />
          );
        })}
      </div>
    </>
  )
}

export default DropDown
