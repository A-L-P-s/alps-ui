import React from 'react';
import './User.css';

interface UserProps {
  name:string,
  preferred_lang:string
}

const User: React.FC<UserProps> = (props) => {
  return (
    <div className='user'>
      <p>{props.name}</p>
      <p>{props.preferred_lang}</p>
    </div>
  );
}

export default User;