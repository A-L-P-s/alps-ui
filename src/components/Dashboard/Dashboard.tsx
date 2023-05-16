import { useState } from 'react';
import mockUser from '../../sampleData/user';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

const Dashboard = () => {
  interface IUser {
    data: {
      id: string,
      type: string,
      attributes: IUserData
    }
  }

  interface IUserData {
    name: string,
    preferred_lang: string,
    challenges: IChallenge[]
  }

  interface IChallenge {
    challenge_id: string,
    language: string,
    verb: string,
    eng_verb: string,
    image_url: string,
    image_alt_text: string,
    created_at: string
  }

  const [userData] = useState<IUser>(mockUser)

  return (
    <div className='dashboard'>
      <PastChallenges challenges={userData.data.attributes.challenges}/>
      <button>New Challenge</button>
    </div>
  );
}

export default Dashboard;