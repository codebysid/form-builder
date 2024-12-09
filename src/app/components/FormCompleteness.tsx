interface IFormCompleteness {
  completePercentage: number;
}
const FormCompleteness = ({ completePercentage }: IFormCompleteness) => {
  const progressBarStyle = "w-[" + completePercentage + "%]";
  return (
    <div className=" flex flex-col gap-1 items-end">
      <p className=" text-xs lg:text-sm font-normal whitespace-nowrap">
        Form Completeness — {Math.ceil(completePercentage)}%
      </p>
      <div className={`w-[75%] lg:w-[150%] h-1 bg-gray-300 rounded-[4px]`}>
        <div
          style={{ width: `${completePercentage}%` }}
          className={`bg-xGreen h-full rounded-[4px]`}
        ></div>
      </div>
    </div>
  );
};

export default FormCompleteness;
