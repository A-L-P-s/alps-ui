import { Link } from 'react-router-dom';
import './User.css';

interface IProps {
  name: string,
  preferred_lang: string,
  id: string
}

const User = ({ name, preferred_lang, id }: IProps): JSX.Element => {

  return (
    <div className='user'>
      <p>{name}</p>
      <p>{preferred_lang}</p>
      <Link to={`/alps-ui/${id}/dashboard`}><button>{`Continue as ${name}`}</button></Link>
    </div>
  );
}

export default User;