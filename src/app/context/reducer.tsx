import { IState } from "./FormStateProvider"

export const ACTION_TYPES = {
  UPDATE_DROPDOWN_VISIBILITY: "updateDropDownVisibility"
}

export function reducer(state: IState, action: { type: string, payload: any }) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY: () => {
      return { ...state, isDropDownOpen: !state.isDropDownOpen }
    }
    default: return state
  }
}
