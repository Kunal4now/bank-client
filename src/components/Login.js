import { useState, useContext, useEffect } from "react";
import React from 'react';
import UserContext from '../context/user/UserContext';
import Sidebar from './Sidebar';
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const context = useContext(UserContext);
    const { user, getUser } = context;
    const setOriginalState = context.setOriginalState;
    useEffect(() => {
        setOriginalState()
    }, [])
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch("https://minibank-server.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        // navigate to dashboard after login
        if (json.success) {
            const user = JSON.stringify(json.user)
            localStorage.setItem('token', json.token)
            localStorage.setItem('user', user);
            navigate('/dashboard/home', {replace: true})
        } else {
            alert("Invalid credentials")
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    
    return(
        <>
        <Sidebar/>
        <div className='container d-flex justify-content-center'>
            {user.role !== null && (
            <Navigate to="/dashboard/home" replace={true} />
            )}
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
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Login</button>
            </form>
        </div>
        </>
    )
}
