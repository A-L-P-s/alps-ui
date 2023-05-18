import './Header.css';

interface IProps {
  userName: string | undefined
}

const Header = ({ userName }: IProps) => {
  return (
    <div className='header'>
      <h1>ALPs</h1>
      {userName && <p className='welcome-msg'>Welcome, {userName}!</p>}
    </div>
  );
}

export default Header;