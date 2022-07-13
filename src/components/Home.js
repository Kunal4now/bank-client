import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import AccountCard from './AccountCard'
import { Route, Routes, useNavigate } from 'react-router';
import Transactions from './Transactions';
import Transfer from './Transfer';

function Home() {
  const [user, setUser] = useState({})
  let navigate = useNavigate();
  const fetchUserDetails = async () => {
    if (!localStorage.token || !localStorage.user) {
      navigate('/')
      return
    }
    const user = JSON.parse(localStorage.user)
    let response = await fetch(`http://localhost:5000/api/users/${user.id}`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'token': localStorage.token
      }
    });

    const json = await response.json();

    setUser(json)
  }
  useEffect(() => {
    fetchUserDetails()
  }, [])

  return (
    <>
    <Sidebar/>
    <div className="container">
      <div className="container" style={{padding: "25px"}}>
        <h1>{"Welcome " + String(user.name)}</h1>
      </div>
      <div className="container" style={{display: "flex"}}>
        <div className="container" style={{display: "flex", alignItems: "center"}}>
          <AccountCard accountNo = {user.accountNo} balance = {user.balance}/>
        </div>
        <div className="container">
        </div>
      </div>
    </div>
    <Routes>
      <Route path="transaction" element={<Transactions/>}/>
      <Route path='transfer' element={<Transfer/>}></Route>
    </Routes>
    </>
  )
}

export default Home