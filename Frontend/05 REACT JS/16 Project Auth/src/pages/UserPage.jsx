import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard';

const UserPage = () => {

    const [userData, setUserData] = useState([])
    console.log(userData);

    const getUserData = async() => {
        try {
            let res = await axios.get('https://fakestoreapi.com/users')
            setUserData(res.data)
        } catch (error) {
            console.log('data erros ', error);
        }
    }
    useEffect(() => {
        getUserData()
    },[])

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
