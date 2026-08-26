import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'

const AuthProtected = () => {

    let {data} = useSelector((store) => store.auth)
    if(data){
        return <Navigate to={'/home'}/>
    }

  return <Outlet/>
}

export default AuthProtected
