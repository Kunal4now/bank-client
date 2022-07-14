import React, {useEffect, useState} from 'react'
import Card from './Card'



function AdminDashboard() {
  const [bankDetails, setBankDetails] = useState(null)

  const getBankDetails = async () => {
    const response = await fetch("https://minibank-server.herokuapp.com/api/bank/", {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'token': localStorage.token
      },
    })
    const json = await response.json();
    setBankDetails(json)
  }

  useEffect(() => {
    getBankDetails();
  }, [])

  return (
    <div className="container">
      <h1>Welcome to Mini Bank</h1>
      {bankDetails !== null ? <Card title={"Total Balance"} value={"$" + bankDetails.balance} /> : <p>Loading...</p>}
      {bankDetails !== null ? <Card title={"Total Users"} value={bankDetails.totalAccounts} /> : <p>Loading...</p>}
    </div>
  )
}

export default AdminDashboard