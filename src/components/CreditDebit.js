import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Sidebar from './Sidebar'

function CreditDebit() {
  const [credentials, setCredentials] = useState({accountNo: "", amount: "", type: ""}) 
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.token || !localStorage.user) {
      navigate('/')
      return
    }
  }, [])

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://minibank-server.herokuapp.com/api/transactions/${credentials.type === 'credit' ? 'credit' : 'debit'}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'token': localStorage.token
          },
          body: JSON.stringify({accountNo: credentials.accountNo, amount: credentials.amount, type: credentials.type})
        });
        let json = await response.json()
        if (json.success) {
          navigate('/dashboard')
        } else {
          let errors = json.messg.join('\n')
          alert(errors)
        }
      } catch (error) {
        console.log(error)
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <>
    <Sidebar/>
    <div className="container">
        <h1>Credit/Debit Funds</h1>
        <div className='d-flex justify-content-center my-3'>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Account No.</label>
            <input type="text" className="form-control" name='accountNo' id="accountNo" value={credentials.accountNo} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Account Number"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Amount</label>
            <input type="text" className="form-control" name='amount' id="amount" value={credentials.amount} onChange={onChange} placeholder="Enter Amount"/>
          </div>
          <div className="container">
            <div className="form-check form-check-inline my-3">
              <input className="form-check-input" type="radio" name="type" id="type" value="credit" onChange={onChange} checked = {credentials.type === 'credit'}/>
              <label className="form-check-label" htmlFor="credit">
                Deposite
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="type" value="debit" onChange={onChange} id="type" checked = {credentials.type === 'debit'}/>
              <label className="form-check-label" htmlFor="debit">
                Withdraw
              </label>
            </div>
          </div>
          <div className="text-center my-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default CreditDebit