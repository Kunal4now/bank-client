import React, {useState, useEffect} from "react";

export default function Table() {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        getContacts();
    }, []);
    
    const getContacts = async () => {
        const response = await fetch("http://localhost:5000/api/transactions/", {
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
    <div className="container py-4">
        <table className="table">
        <thead className="thead-light">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Account No.</th>
            <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            {contact && contact.map((element, index) => {
                return (
                    <tr key = {index}>
                        <th scope="row">{index}</th>
                        <td>{element.sent === true ? element.receiver : element.sender}</td>
                        <td>{element.sent === true ? -element.amount : element.amount}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    );
}
