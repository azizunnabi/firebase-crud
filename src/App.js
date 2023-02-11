import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import AddUser from "./Pages/AddUser.jsx"
import Home from "./Pages/Home"
import UsersContextProvider from "./Store/UsersContext"

function App() {


  return (
    <UsersContextProvider>
       <BrowserRouter>
       <NavBar />
    <Routes>
<Route path="/" element={<Home/>}/>

<Route path="adduser" element={<AddUser/>}/>


    </Routes>
    </BrowserRouter>
    </UsersContextProvider>
   
   
  )
}

export default App
