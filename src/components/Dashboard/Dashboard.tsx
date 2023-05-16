import React, { useState } from 'react';
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

  const [userData, setUserData] = useState<IUser>(mockUser)

  return (
    <div>
      <PastChallenges challenges={userData.data.attributes.challenges}/>
    </div>
  );
}

export default Dashboard;