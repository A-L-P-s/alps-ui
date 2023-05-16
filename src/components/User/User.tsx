import React from 'react';
import './User.css';
import users from '../../sampleData/users'

const userOne = users.data[0].attributes;
const userTwo = users.data[1].attributes;

const User = () => {
  return (
    <div>
      <div>
        <p>Name: {userOne.name}</p>
        <p>{userOne.preferred_lang}</p>
      </div>
      <div>
        <p>Name: {userTwo.name}</p>
        <p>{userTwo.preferred_lang}</p>
      </div>
    </div>
  );
}

export default User;