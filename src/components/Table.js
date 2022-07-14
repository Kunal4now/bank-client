import React, {useState, useEffect, useContext} from "react";
import userContext from "../context/user/UserContext";

export default function Table() {
    const [contact, setContact] = useState([]);
    const context = useContext(userContext);
    const { user, getUser } = context;

    useEffect(() => {
        getContacts();
        getUser();
    }, []);
    
    const getContacts = async () => {
        const response = await fetch("https://minibank-server.herokuapp.com/api/transactions/", {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'token': localStorage.token
            },
        })
        const json = await response.json();
        setContact(json)
    }
    return (
    <div className="container py-4 d-flex">
        <table className="table">
        <thead className="thead-light">
            <tr>
            <th scope="col">Account No.</th>
            <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            {user.role && contact && contact.map((element, index) => {
                return (
                    <tr key = {index}>
                        <td>{element.receiver}</td>
                        <td><p style={{fontWeight: 'bold', color: element.type === 'debit' ? 'red' : 'green'}}>$ {element.type == 'debit' ? -element.amount : element.amount}</p></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    );
}
