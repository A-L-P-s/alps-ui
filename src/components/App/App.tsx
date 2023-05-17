// import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Feedback from '../Feedback/Feedback';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { IUsers, IUser } from '../../Utilities/interfaces';
import { useState, useEffect } from 'react';
import { getUsers } from '../../Utilities/api-calls';

const App = () => {

  const initialUsers = {
    data: []
  }

  const [users, setUsers] = useState<IUsers | null>(initialUsers)
  const [user, setUser] = useState<IUser | null>(null)

  const setUserData = (userData: IUser) => {
    setUser(userData)
    console.log(user)
  }

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data))
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={users !== null && <Home allUsers={users} setUserData={setUserData}/>} />
        <Route path='/Deniz/dashboard' element={<Dashboard />} />
        <Route path='/Deniz/new-challenge' element={<Form />} />
        <Route path='/Deniz/feedback/:id' element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;