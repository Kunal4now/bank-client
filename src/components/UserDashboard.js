import React from 'react'
import AccountCard from './AccountCard'

function UserDashboard(props) {
  return (
    <div className="container">
      <div className="container" style={{padding: "25px"}}>
        <h1>{"Welcome " + String(props.name)}</h1>
      </div>
      <div className="container" style={{display: "flex"}}>
        <div className="container" style={{display: "flex", alignItems: "center"}}>
          <AccountCard accountNo = {props.accountNo} balance = {props.balance}/>
        </div>
        <div className="container">
        </div>
      </div>
    </div>
  )
}

export default UserDashboard