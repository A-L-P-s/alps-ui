import './Header.css';

interface IProps {
  userName: string | undefined
}

const Header = ({ userName}: IProps) => {
  return (
    <div>
      <h1>ALPs</h1>
      {userName && <p>Welcome, {userName}!</p>}
    </div>
  );
}

export default Header;