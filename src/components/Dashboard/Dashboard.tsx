import { IUser } from '../../Utilities/interfaces';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';
import { param } from 'cypress/types/jquery';

interface IProps {
  user: IUser | null,
  setUserData: Function
}

const Dashboard = ({ user, setUserData }: IProps) => {
  const paramsData = useParams()

  useEffect(() => {
    setUserData(paramsData.userId)
  }, [])

  return (
    <div className='dashboard'>
      { user &&
      <div className='past-challenges'>
        { user.data.attributes.challenges && <PastChallenges challenges={user.data.attributes.challenges}/>}
        <Link to={`/${user.data.id}/new-challenge`}><button>New Challenge</button></Link>
      </div>
      }
    </div>
  );
}

export default Dashboard;