import { Action } from './actions'

export type IState = {}

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
