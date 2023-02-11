
import { getListSubheaderUtilityClass } from '@mui/material'
import { collection, getDocs } from "firebase/firestore";
import {useContext, useEffect} from 'react'
import UsersList from '../components/UsersList'
import DataBase from '../FireBaseDb'
import { UsersContext } from '../Store/UsersContext'


const Home = () => {
  const {state, dispatch} = useContext(UsersContext)

const getUsers =async()=>{

  const collect = collection(DataBase,"users")
  const documents = await getDocs(collect)
  
  dispatch({type:"CLOSE_LOADER", payload: false})
  const users=documents.docs.map(doc=>{
    
    return doc.data()
  })
return users
}
  useEffect(()=>{
    
    const getData = async() => {
      const result = await getUsers();
      dispatch({type: "SET_USERS", payload: result})
      // console.log(result)
  }
   getData();
  },[])
  return state.Loading ? "..." : state.users.length > 0 && <UsersList users={state.users}/>

}
export default Home 