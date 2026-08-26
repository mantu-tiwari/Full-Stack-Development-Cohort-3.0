import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'

const MainProtected = () => {

    let {data} = useSelector((store) => store.auth)

    if(!data){
        return <Navigate to={'/'} />
    }
  return <Outlet/>
}

export default MainProtected
