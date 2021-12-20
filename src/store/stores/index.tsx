import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer, { IState } from './reducer'
import { Action } from './actions'
import { IProps } from '..'

export const initState: IState = {
  selectedCommdity: {} as Commodity,
}

const StateContext = createContext(initState)
const DispatchContext = createContext((() => 0) as React.Dispatch<Action>)

export const GlobalProvider: React.ComponentType = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initState, () => {
    const localStorageState = localStorage.getItem('state')
    return localStorageState ? JSON.parse(localStorageState) : initState
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{props.children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useGlobalDispatch = () => useContext(DispatchContext)

export const useGlobalState = () => useContext(StateContext)
