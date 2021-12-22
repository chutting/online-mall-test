import { createContext, useContext, useReducer } from 'react'
import reducer, { IState } from './reducer'
import { Action } from './actions'
import { IProps } from '..'

export const initState: IState = {}

const StateContext = createContext(initState)
const DispatchContext = createContext((() => 0) as React.Dispatch<Action>)

export const GlobalProvider: React.ComponentType = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{props.children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useGlobalDispatch = () => useContext(DispatchContext)

export const useGlobalState = () => useContext(StateContext)
