import React, {useState, useEffect} from 'react'

function AccountCard(props) {
    return (
        <div className="container" style={{padding: "10px", width: "600px", border: "1px solid grey", borderRadius: "10px"}}>
            <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
                <p>Main Account</p>
                <p>Available Funds</p>
            </div>
            <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className="container" style={{padding: "0px"}}>
                    <p>Account No.</p>
                    <p> {props.accountNo} </p>
                </div>
                <p style={{fontSize: "40px", fontWeight: "bold"}}>{"$" + props.balance}</p>
            </div>
            <div className="btn btn-success">
                Transfer money
            </div>
        </div>
    )
}

export default AccountCard