// import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
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
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<Boolean>(false)
  
  const resetUser = () => {
    setUser(null)
  }

  const setUserData = (userId: string) => {
    setLoading(true)
    getUser(userId)
      .then(data=> {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString())
        setLoading(false)
      })
  }

  useEffect(() => {
    if(!users?.data.length) {
      setLoading(true)
      getUsers()
        .then(data => {
          setUsers(data)
          setLoading(false)
        })
        .catch(error => {
          let errorMsg = error.toString()
          setError(errorMsg)
          setLoading(false)
        })
    }
  }, [users?.data.length])

  useEffect(() => {
    const userId = location.pathname.split('/')[1];

    if (userId) {
      setLoading(true)
      getUser(userId)
        .then(data=> setUser(data))
        .catch(error => {
          console.error('An error occurred:', error);
          setError(error.toString())
        })
      setLoading(false)  
    }
  }, [location])

  return (
    <>
      <Header userName={user?.data.attributes.name}/>
        {!error && !loading ?
      <Routes>
        <Route path='/' element={users !== null && <Home allUsers={users} resetUser={resetUser}/>} />
        <Route path='/:userId/dashboard' element={<Dashboard user={user} setUserData={setUserData}/>}/>
        <Route
          path='/:userId/new-challenge'
          element={<Form 
            language={user?.data.attributes.preferred_lang}
            userId={user?.data.id}
            setError={setError}
          />} 
        />
        <Route path='/:userId/feedback/:id' element={<Feedback setError={setError}/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes> : error ? <h1>{error}</h1> : <Loading />}
    </>
  );
}

export default App;