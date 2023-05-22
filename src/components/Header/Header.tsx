import { Link } from 'react-router-dom';
import './Header.css';

interface IProps {
  userName: string | undefined
}

const Header = ({ userName }: IProps): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' style={{textDecoration: 'none'}}><h1>ALPs</h1></Link>
      {userName && <p className='welcome-msg'>Welcome, {userName}!</p>}
    </div>
  );
}

export default Header;