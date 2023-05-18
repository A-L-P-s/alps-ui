import { useState, useEffect } from 'react';
import { IUser } from '../../Utilities/interfaces';
import { Link } from 'react-router-dom';
import mockUser from '../../sampleData/user';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

interface IProps {
  user: IUser
}

const Dashboard = ({ user }: IProps) => {
  const [userData, setUserData] = useState<IUser>(user)

  useEffect(() => {
    setUserData(user)
  }, [user])

  return (
    <div className='dashboard'>
      {userData.data.attributes.challenges && <PastChallenges challenges={userData.data.attributes.challenges}/>}
      <Link to='/Deniz/new-challenge'><button>New Challenge</button></Link>
    </div>
  );
}

export default Dashboard;