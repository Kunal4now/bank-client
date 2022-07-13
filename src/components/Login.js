import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import React from 'react';

export default function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        const user = JSON.stringify(json.user)
        if (json.success) {
            localStorage.setItem('token', json.token)
            localStorage.setItem('user', user)
            navigate("dashboard")
        } else {
            
            alert("Invalid credentials")
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return <div className='container p-5'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>;
}
