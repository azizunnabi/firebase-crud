
import { createContext, useContext, useReducer } from 'react'
import Reducer from './UsersReducer'
export const UsersContext = createContext()
const initState = {users: [], Loading: true}
const UsersContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initState)
  return (
    <UsersContext.Provider value={{state,dispatch}}>
        {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider;
