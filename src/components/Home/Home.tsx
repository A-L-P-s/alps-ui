import React from 'react';
import './Home.css';
import User from '../User/User';
import users from '../../sampleData/users'

const userOne = users.data[0].attributes;
const userTwo = users.data[1].attributes;

const Home = () => {
  return (
    <div>
      <p className='choose-user'>Choose your user</p>
      <div className='user-container'>
        <User name={userOne.name} preferred_lang={userOne.preferred_lang}/>
        <User name={userTwo.name} preferred_lang={userTwo.preferred_lang}/>
      </div>
    </div>
  );
}

export default Home;