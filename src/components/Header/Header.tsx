import { Link } from 'react-router-dom';
import headerLogo from '../../assets/logo.png';
import './Header.css';

interface IProps {
  userName: string | undefined
}

const Header = ({ userName }: IProps): JSX.Element => {
  return (
    <div className='header'>
      <Link to='/' style={{textDecoration: 'none'}}><img className='header-logo'src={headerLogo} alt='Alps logo'></img></Link>
      {userName && <p className='welcome-msg'><span className="material-symbols-outlined">account_circle</span>Welcome, {userName}!</p>}
    </div>
  );
}

export default Header;