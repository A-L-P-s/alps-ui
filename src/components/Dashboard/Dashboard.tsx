import { useState } from 'react';
import { IUser } from '../../Utilities/interfaces';
import mockUser from '../../sampleData/user';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

const Dashboard = () => {
  const [userData] = useState<IUser>(mockUser)

  return (
    <div className='dashboard'>
      <PastChallenges challenges={userData.data.attributes.challenges}/>
      <button>New Challenge</button>
    </div>
  );
}

export default Dashboard;