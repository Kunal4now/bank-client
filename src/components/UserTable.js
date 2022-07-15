import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import {Link, Navigate, useNavigate} from 'react-router-dom'

function UserTable() {

    const [users, setUsers] = useState(null)

    const getUsers = async () => {
        const response = await fetch("https://minibank-server.herokuapp.com/api/users/getall", {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'token': localStorage.token
            },
        })
        const json = await response.json();
        setUsers(json)
    }
    let navigate = useNavigate();
    useEffect(() => {
        // if (localStorage.user.role !== 'admin') {
        //     navigate('/')
        // }
        getUsers()
    }
    , [])

    return (
        <>
        <Sidebar/>
        <div className="container py-4">
        <h1>Registered Users</h1>
        <Link to='/dashboard/users/create'><div className="btn btn-success">Add</div></Link>
        <table className="table">
        <thead className="thead-light">
            <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Account No.</th>
            <th scope="col">Balance</th>
            </tr>
        </thead>
        <tbody>
            {users && users.map((element, index) => {
                return (
                    <tr key = {index}>
                        {/* <th scope="row">{index}</th> */}
                        <td>{element.name}</td>
                        <td>{element.accountNo}</td>
                        <td style={{color: 'green', fontWeight: 'bold'}}>$ {element.balance}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    </>
    )
}

export default UserTable