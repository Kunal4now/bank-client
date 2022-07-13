import React from 'react'
import Sidebar from './Sidebar'
import Table from './Table'
import {useNavigate} from 'react-router-dom'

function Transactions() {
  let navigate = useNavigate();
  if (!localStorage.token || !localStorage.user) {
    navigate('/')
    return
  }
  return (
    <>
    <Sidebar/>
    <div className="container">
        <h1>Transactions</h1>
        <Table/>
    </div>
    </>
  )
}

export default Transactions