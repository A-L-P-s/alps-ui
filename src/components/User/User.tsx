import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/${name}/dashboard`}><button onClick={() => setUserData(id)}>{`Continue as ${name}`}</button></Link>
    </div>
  );
}

export default User;