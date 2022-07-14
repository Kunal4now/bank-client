import React, {useState, useEffect, useContext} from 'react'
import Sidebar from './Sidebar'
import { Route, Routes, useNavigate } from 'react-router';
import Transactions from './Transactions';
import Transfer from './Transfer';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import UserContext from '../context/user/UserContext';

function Home() {
  const context = useContext(UserContext);
  const { user, getUser, getSidebarOptions, sidebarOptions } = context;

  useEffect(() => {
    getUser();
    getSidebarOptions();
  }, [])

  return (
    <>
    {user.role !== null ? <Sidebar options = {sidebarOptions} /> : <p>Loading</p> }
    {user.role !== null ? (user.role === 'user' && <UserDashboard name = {user.name} accountNo = {user.accountNo} balance = {user.balance} />) : <p>Loading</p>}
    {user !== null ? (user.role === 'admin' && <AdminDashboard/>) : <p>Loading</p>}
    {/* <Routes>
      <Route path="transaction" element={<Transactions/>}/>
      <Route path='transfer' element={<Transfer/>}></Route>
    </Routes> */}
    </>
  )
}

export default Home