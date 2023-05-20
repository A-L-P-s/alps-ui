import { IUser } from '../../Utilities/interfaces';
import { Link } from 'react-router-dom';
import PastChallenges from '../PastChallenges/PastChallenges';
import './Dashboard.css';

interface IProps {
  user: IUser | null,
  setUserData: Function
}

const Dashboard = ({ user, setUserData }: IProps) => {

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