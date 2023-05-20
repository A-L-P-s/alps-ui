// import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Feedback from '../Feedback/Feedback';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { IUsers, IUser } from '../../Utilities/interfaces';
import { useState, useEffect } from 'react';
import { getUsers, getUser } from '../../Utilities/api-calls';

const App = () => {

  const location = useLocation();
  const initialUsers = {
    data: []
  }

  const [users, setUsers] = useState<IUsers | null>(initialUsers)
  const [user, setUser] = useState<IUser | null>(null)
  
  const resetUser = () => {
    setUser(null)
  }

  const setUserData = (userId: string) => {
    getUser(userId)
      .then(data=> setUser(data))
  }

  useEffect(() => {
    !users?.data.length && getUsers()
      .then(data => setUsers(data))
  }, [users?.data.length])

  useEffect(() => {
    const userId = location.pathname.split('/')[1];

    if (userId) {
      getUser(userId)
        .then(data=> setUser(data));
    }
  }, [location])

  return (
    <>
      <Header userName={user?.data.attributes.name}/>
      <Routes>
        <Route path='/' element={users !== null && <Home allUsers={users} resetUser={resetUser}/>} />
        <Route path='/:userId/dashboard' element={<Dashboard user={user} setUserData={setUserData}/>}/>
        <Route
          path='/:userId/new-challenge'
          element={<Form 
            userName={user?.data.attributes.name}
            language={user?.data.attributes.preferred_lang}
            userId={user?.data.id}
          />} 
        />
        <Route path='/:userId/feedback/:id' element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;