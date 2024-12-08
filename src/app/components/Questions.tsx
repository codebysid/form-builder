import QuestionRender from "./ui/QuestionRender"

interface IQuestions {
  type: string
}

const Questions = ({ type }: IQuestions) => {

  return (
    <div>
      {
        type && <p>Questions</p>
      }
    </div>

  )
}

export default Questions
