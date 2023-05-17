import React from 'react';
import { getUser } from '../../Utilities/api-calls';
import './User.css';

interface IProps {
  name:string,
  preferred_lang:string,
  id:string
  setUserData: Function
}

const User: React.FC<IProps> = ({ name, preferred_lang, id, setUserData}) => {

  const selectUser = (id: string) => {
    getUser(id)
      .then(data => console.log(data))
  }

  return (
    <div className='user'>
      <p>{name}</p>
      <p>{preferred_lang}</p>
      <button onClick={() => selectUser(id)}>{`Continue as ${name}`}</button>
    </div>
  );
}

export default User;