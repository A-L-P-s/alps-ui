import Dashboard from '../Dashboard/Dashboard';
import Feedback from '../Feedback/Feedback';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { IUsers, IUser } from '../../Utilities/interfaces';
import { useState, useEffect } from 'react';
import { getUsers, getUser } from '../../Utilities/api-calls';
import './App.css';

const App = (): JSX.Element => {

  const location = useLocation();

  const initialUsers = {
    data: []
  }

  const [users, setUsers] = useState<IUsers | null>(initialUsers)
  const [user, setUser] = useState<IUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const resetUser = () => {
    setUser(null)
  }

  useEffect(() => {
    !users?.data.length && getUsers()
      .then(data => {
        setUsers(data)
      })
      .catch(error => {
        let errorMsg = error.toString()
        setError(errorMsg)
      })
  }, [users?.data.length])

  useEffect(() => {
    const userId = location.pathname.split('/')[1];

    userId && getUser(userId)
      .then(data=> setUser(data))
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString())
      })
  }, [location])

  return (
    <>
      <Header userName={user?.data.attributes.name}/>
      {!error ? <Routes>
        <Route path='/' element={users !== null && <Home allUsers={users} resetUser={resetUser}/>} />
        <Route path='/:userId/dashboard' element={<Dashboard user={user} />}/>
        <Route
          path='/:userId/new-challenge'
          element={<Form 
            language={user?.data.attributes.preferred_lang}
            userId={user?.data.id}
            setError={setError}
          />} 
        />
        <Route path='/:userId/feedback/:id' element={<Feedback setError={setError}/>} />
      </Routes> 
      : <div className='feedback-error'>
          <h3>{error}</h3>
          <h4>Here's a handy button to return Home!</h4>
          <Link to={`/`} onClick={() => setError(null)}><button>Home</button></Link>
        </div>}
    </>
  );
}

export default App;