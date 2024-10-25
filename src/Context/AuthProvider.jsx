import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [userData, setUserData] = useState(null)
const data = getLocalStorage()
console.log(data)


  return (
    <div>
      <AuthContext.Provider value={"Arojit"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider