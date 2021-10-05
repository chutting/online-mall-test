import { Action, actions } from './actions'

export type IState = {
  selectedCommdity: Commodity
}

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case actions.SET_COMMODITY:
      return {
        ...state,
        profile: action.payload,
      }
    default:
      return state
  }
}

export default reducer
