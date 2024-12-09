interface IFormCompleteness {
  completePercentage: number;
}
const FormCompleteness = ({ completePercentage }: IFormCompleteness) => {
  const progressBarStyle = "w-[" + completePercentage + "%]";
  console.log({ progressBarStyle });
  return (
    <div className=" flex flex-col gap-1 items-end">
      <p className=" text-sm font-normal">
        Form Completeness — {completePercentage}%
      </p>
      <div className={`w-[150%] h-1 bg-gray-300 rounded-[4px]`}>
        <div
          style={{ width: `${completePercentage}%` }}
          className={`bg-green-500 h-full rounded-[4px]`}
        ></div>
      </div>
    </div>
  );
};

export default FormCompleteness;
