import { useState } from 'react';
import { IUser } from '../../Utilities/interfaces';
import { Link } from 'react-router-dom';
import mockUser from '../../sampleData/user';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

const Dashboard = () => {
  const [userData] = useState<IUser>(mockUser)

  console.log(mockUser)

  return (
    <div className='dashboard'>
      <PastChallenges challenges={userData.data.attributes.challenges}/>
      <Link to='/Deniz/new-challenge'><button>New Challenge</button></Link>
    </div>
  );
}

export default Dashboard;