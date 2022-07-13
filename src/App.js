import './App.css';
import React from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Transfer from './components/Transfer';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path="/dashboard/*" element = {<Home/>}/>
          <Route path="/dashboard/home/*" element = {<Home/>}/>
          <Route path='/dashboard/transactions' element={<Transactions/>}/>
          <Route path='/dashboard/transfer' element={<Transfer/>}/>
      </Routes>
    </div>
  );
}

export default App;
