import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

interface IProps {
  name: string,
  preferred_lang: string,
  id: string
}

const User: React.FC<IProps> = ({ name, preferred_lang, id }) => {

  return (
    <div className='user'>
      <p>{name}</p>
      <p>{preferred_lang}</p>
      <Link to={`/${id}/dashboard`}><button>{`Continue as ${name}`}</button></Link>
    </div>
  );
}

export default User;