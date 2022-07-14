import userContext from "./UserContext";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const UserState = (props) => {
    const [user, setUser] = useState({
        name: "",
        accountNo: "",
        balance: 0,
        role: null,
        id: ""
    });

    const [sidebarOptions, setsidebarOptions] = useState([]);

    let navigate = useNavigate();

    const getUser = async () => {
        if (!localStorage.token || !localStorage.user) {
            navigate('/')
            return
        }
        const user = JSON.parse(localStorage.user)
        let response = await fetch(`https://minibank-server.herokuapp.com/api/users/`, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'token': localStorage.token
            }
        });
        const json = await response.json();
        setUser(json)
    }

    const setOriginalState = () => {
        setUser({
            name: "",
            accountNo: "",
            balance: 0,
            role: null,
            id: ""
        });
        setsidebarOptions([]);
    }

    const getSidebarOptions = () => {
        if (user.role === "admin") {
            setsidebarOptions(["Home", "Users", "CreditDebit"])
        } else {
            setsidebarOptions(["Home", "Transactions", "Transfer"])
        }
    }

    return (
        <userContext.Provider value={{user, getUser, getSidebarOptions, sidebarOptions, setOriginalState}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;