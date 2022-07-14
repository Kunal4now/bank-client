import './App.css';
import React from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Transactions from './components/Transactions';
import UserTable from './components/UserTable';
import Transfer from './components/Transfer';
import UserState from './context/user/UserState';
import Signup from './components/Signup';
import CreditDebit from './components/CreditDebit';

function App() {
  return (
    <div>
      <UserState>
        <Routes>
            <Route path = "/" element = {<Login/>}/>
            <Route path="/dashboard/*" element = {<Home/>}/>
            <Route path="/dashboard/home/*" element = {<Home/>}/>
            <Route path='/dashboard/transactions' element={<Transactions/>}/>
            <Route path='/dashboard/transfer' element={<Transfer/>}/>
            <Route path='/dashboard/users' element={<UserTable/>} />
            <Route path='/dashboard/users/create' element={<Signup/>} />
            <Route path='/dashboard/creditdebit' element={<CreditDebit/>} />
        </Routes>
      </UserState>
    </div>
  );
}

export default App;
