import React from 'react'
import { Navigate, Outlet } from 'react-router'

const AuthProtected = () => {

    let isAuthincated = JSON.parse(localStorage.getItem('isLoggedIn'))
    if(isAuthincated){
        return <Navigate to={'main'}/>
    }

  return <Outlet/>
}

export default AuthProtected
