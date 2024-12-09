interface IFormCompleteness {
  completePercentage: number;
}
const FormCompleteness = ({ completePercentage }: IFormCompleteness) => {
  const progressBarStyle = "w-[" + completePercentage + "%]";
  console.log({ progressBarStyle });
  return (
    <div>
      <p>Form Completeness — {completePercentage + "%"}</p>
      <div className={`w-full h-1 bg-gray-300 rounded-[4px]`}>
        <div
          className={`bg-green-500 ${progressBarStyle} h-full rounded-[4px]`}
        ></div>
      </div>
    </div>
  );
};

export default FormCompleteness;
