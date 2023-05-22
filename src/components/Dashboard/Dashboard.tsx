import PastChallenges from '../PastChallenges/PastChallenges';
import { IUser } from '../../Utilities/interfaces';
import { Link } from 'react-router-dom';
import './Dashboard.css';

interface IProps {
  user: IUser | null
}

const Dashboard = ({ user }: IProps): JSX.Element => {

  return (
    <div className='dashboard'>
      { user &&
      <div className='past-challenges'>
        { user.data.attributes.challenges && <PastChallenges challenges={user.data.attributes.challenges} userId={user.data.id} />}
        <Link to={`/${user.data.id}/new-challenge`}><button>New Challenge</button></Link>
      </div>
      }
    </div>
  );
}

export default Dashboard;