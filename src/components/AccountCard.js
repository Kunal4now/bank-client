import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function AccountCard(props) {
    return (
        <div className="container shadow p-3 mb-5 bg-white" style={{padding: "10px", width: "600px", border: "1px solid lightgrey", borderRadius: "15px"}}>
            <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
                <p>Main Account</p>
                <p>Available Funds</p>
            </div>
            <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className="container" style={{padding: "0px"}}>
                    <p>Account No.</p>
                    <p> {props.accountNo} </p>
                </div>
                <p style={{fontSize: "40px", fontWeight: "bold"}}>${props.balance}</p>
            </div>
            <Link to={'/dashboard/transfer'}><div className="btn btn-primary">
                Transfer money
            </div></Link>
        </div>
    )
}

export default AccountCard