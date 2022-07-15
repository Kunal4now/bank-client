import React, {useEffect} from 'react'
import Table from './Table'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import UserContext from '../context/user/UserContext'

function Users() {
  let navigate = useNavigate();
  const context = useContext(UserContext);
  const {user, getUser} = context;
  useEffect(() => {
    getUser()
    // console.log(user)
    // if (user.role !== "admin") {
    //   navigate('/')
    // }
  }
  , [])

  return (
    <Table/>
  )
}

export default Users