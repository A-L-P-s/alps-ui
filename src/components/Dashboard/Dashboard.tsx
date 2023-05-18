import { useState, useEffect } from 'react';
import { IUser } from '../../Utilities/interfaces';
import { Link } from 'react-router-dom';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

interface IProps {
  user: IUser
}

const Dashboard = ({ user }: IProps) => {

  return (
    <div className='dashboard'>
      {user.data.attributes.challenges && <PastChallenges challenges={user.data.attributes.challenges}/>}
      <Link to='/Deniz/new-challenge'><button>New Challenge</button></Link>
    </div>
  );
}

export default Dashboard;