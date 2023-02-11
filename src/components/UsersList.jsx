import React from 'react'
import Tab1 from "./Tab1"
const UsersList = ({users}) => {
    console.log(users)
  return (
  //  <Tab1 />
  <table className="max-w-xl mx-auto w-full ">
  <thead>
      <tr>
          <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">Name</th>
          <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">Email</th>
          <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">Contact</th>
          
          <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">Address</th>

      </tr>
  </thead>
  <tbody>
      {users.map((user) =>{
          return (<tr>
              <td className="p-4 text-sm text-gray-600">{user.Name}</td>
              <td className="p-4 text-sm text-gray-600">{user.Email}</td>
              <td className="p-4 text-sm text-gray-600">{user.Contact}</td>
              <td className="p-4 text-sm text-gray-600">{user.Address}</td>
          </tr>)
      })}
  </tbody>
</table>
  )
  
}

export default UsersList