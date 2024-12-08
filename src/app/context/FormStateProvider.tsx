import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { reducer } from "./reducer"

export interface IState {
  isDropDownOpen: boolean
}

export interface IContextState {
  state: IState,
  dispatch: Dispatch<any>
}

const FormStateContext = createContext<IContextState | null>(null)

interface IFormStateProvider {
  children: ReactNode
}
const FormStateProvider = ({ children }: IFormStateProvider) => {

  const [state, dispatch] = useReducer(reducer, { isDropDownOpen: false })

  return (
    <FormStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStateContext.Provider>
  )
}

export default FormStateProvider
