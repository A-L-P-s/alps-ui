import React from 'react';
import './Home.css';
import User from '../User/User';



const Home = () => {
  return (
    <div>
      <p className='choose-user'>Choose your user</p>
      <div className='user-container'>
        <div className='user'>
          <h2>Deniz</h2>
          <p>Turkish</p>
        </div>
        <div className='user'>
          <h2>Alexis</h2>
          <p>Spanish</p>
        </div>
      </div>
    </div>
  );
}

export default Home;