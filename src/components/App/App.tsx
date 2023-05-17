// import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Feedback from '../Feedback/Feedback';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// interface IChallenge {
//   challenge_id: string, 
//   language: string, 
//   verb: string,
//   eng_verb: string, 
//   image_url: string,
//   image_alt_text: string, 
//   created_at: string
// }

// interface IUser {
//   attributes: {
//     name: string,
//     preferred_lang: string,
//     challenges: IChallenge[]
//   }
// }

const App = () => {
  // const [user, setUser] = useState({})

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