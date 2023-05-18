import './Header.css';
import { Link } from 'react-router-dom';

interface IProps {
  userName: string | undefined
}

const Header = ({ userName}: IProps) => {
  return (
    <div className='header'>
      <Link to='/' style={{textDecoration: 'none'}}><h1>ALPs</h1></Link>
      {userName && <p className='welcome-msg'>Welcome, {userName}!</p>}
    </div>
  );
}

export default Header;