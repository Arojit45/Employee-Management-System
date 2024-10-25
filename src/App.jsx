import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials")
    }

  }
 
  const data = useContext(AuthContext)
  console.log(data)
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user== 'admin'? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App