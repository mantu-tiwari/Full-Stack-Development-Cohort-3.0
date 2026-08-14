import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthShop } from '../context/AuthContext'

const ProtectedRoutes = () => {

    const {loggedInData} = useContext(AuthShop)
    
    if(!loggedInData){
       return <Navigate to={'/'} />
    }

  return <Outlet/>
}

export default ProtectedRoutes
