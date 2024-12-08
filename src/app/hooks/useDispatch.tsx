import { useContext } from "react"
import { FormStateContext } from "../context/FormStateProvider"

const useDispatch = () => {
  const context = useContext(FormStateContext)

  if (!context?.dispatch) return null

  return context.dispatch

}

export default useDispatch
