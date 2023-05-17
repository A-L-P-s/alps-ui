// import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Feedback from '../Feedback/Feedback';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { IUsers, IUser } from '../../Utilities/interfaces';
import { useState } from 'react';

const App = () => {

  const initialUsers = {
    data: []
  }

  const [users, setUsers] = useState<IUsers>(initialUsers)
  const [user, setUser] = useState<IUser>()

  


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Deniz/dashboard' element={<Dashboard />} />
        <Route path='/Deniz/new-challenge' element={<Form />} />
        <Route path='/Deniz/feedback/:id' element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;