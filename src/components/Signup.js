import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Signup() {
    const [details, setDetails] = useState({name: "", email: "", password: ""})
    const onChange = (e)=>{
        setDetails({...details, [e.target.name]: e.target.value})
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        let data = details
        const response = await fetch("https://minibank-server.herokuapp.com/api/auth/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();

        if (json.success) {
            alert("User created")
        } else {
            alert("Some error occured")
        }
    }
    return (
        <>
        <Sidebar/>
<div className="container my-5">
    <h1>Register User</h1>
        <form onSubmit={handlesubmit}>
            <div className="row">
                <div className="col">
                <label htmlFor="firstname">Name</label>
                <input type="text" name='name' className="form-control" value={details.name} onChange={onChange} id='name' placeholder="Name"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' className="form-control" onChange={onChange} value={details.email} id='email' placeholder="Email"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" onChange={onChange} value={details.password} id='password' placeholder="password"/>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    </>
    )
}

export default Signup