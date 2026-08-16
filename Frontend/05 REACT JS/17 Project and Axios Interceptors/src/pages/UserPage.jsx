import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInstance';

const UserPage = () => {

    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log(userData);

    const getUserData = async() => {
        try {
            let res = await axiosInstance('/users')
            setUserData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log('data erros ', error);
        }
    }
    useEffect(() => {
        getUserData()
    },[])

    if(isLoading) return <h1 className='text-4xl'>Loading....</h1>

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4'>
        {
            userData.map((e) => {
                return <UserCard key={e.id} user={e} />
            })
        }
    </div>
  )
}

export default UserPage
