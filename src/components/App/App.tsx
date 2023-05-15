import React, { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Feedback from '../Feedback/Feedback';

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
      <Home />
      <Dashboard />
      <Form />
      <Feedback />
    </>
  );
}

export default App;