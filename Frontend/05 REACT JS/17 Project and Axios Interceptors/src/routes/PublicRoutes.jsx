import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthShop } from '../context/AuthContext'

const PublicRoutes = () => {

    const {loggedInData} = useContext(AuthShop)

    if(loggedInData){
        return <Navigate to={'/main'} />
    }

  return <Outlet/>
}

export default PublicRoutes
