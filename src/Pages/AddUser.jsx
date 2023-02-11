import { Button, TextField,CircularProgressWithLabel} from '@mui/material'
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import DataBase from '../FireBaseDb';
import { Navigate, useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AddUser = () => {
  const progress=100
  const Navigate=useNavigate()
    const[Loading, setLoading]=useState(false)
    const[state, setState]=useState({Name: "", Email: "", Contact: "", Address: ""})




    const handle = (e)=>{
      setState({...state, [e.target.name]: e.target.value})
    

  }



    const submit = async(e)=>{
      e.preventDefault();
      if(state.Name=='' || state.Email == '' || state.Contact =='' || state.Address ==''){alert("Please filled all the fields first")}else{

      
        
        try {
          setLoading(true)
          const docRef =await addDoc(collection(DataBase, "users"), {...state}
          );
          console.log("Document written with ID: ", docRef.id);
          setLoading(false)
          Navigate('/')
        } catch (e) {
          setLoading(false)
          console.error("Error adding document: ", e);

        }
      }
      
       
    }

   
    
  return (
    <div>       
    {Loading ? 'Adding User...': <form  >
        <h1 className='mb-5 font-medium'>Create Users</h1>
        <div className='grid gap-5 w-full md:grid-cols-2 ml-[240px] '>

        <TextField id="outlined-basic" label="Name" variant="outlined" name="Name"  onChange={handle} required  value={state.Name}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" name="Email"  onChange={handle} required value={state.Email}/>
        <TextField id="outlined-basic" label="Contact" variant="outlined" name="Contact"  onChange={handle} required value={state.Contact}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" name="Address"  onChange={handle} required value={state.Address}/>
        <Button variant="contained" size="large" onClick={submit}  endIcon={<SendIcon />}>Add User</Button>
        </div>
        </form>
}
    </div>
  )
}

export default AddUser