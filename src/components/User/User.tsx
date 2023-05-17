import React from 'react';
import './User.css';

interface IProps {
  name:string,
  preferred_lang:string,
  id:string
  setUserData: Function
}

const User: React.FC<IProps> = ({ name, preferred_lang, id, setUserData}) => {

  return (
    <div className='user'>
      <p>{name}</p>
      <p>{preferred_lang}</p>
      <button onClick={() => setUserData(id)}>{`Continue as ${name}`}</button>
    </div>
  );
}

export default User;