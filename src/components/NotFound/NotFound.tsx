import { Link } from "react-router-dom";
import './NotFound.css';

interface IProps {
  setError: Function
}

const NotFound = ({ setError }: IProps): JSX.Element => {
  return (
    <div className='not-found'>
      <h1>Uh oh!</h1>
      <h3>It looks like this page no longer exists. Please return home and try again!</h3>
      <Link to='/' onClick={() => setError(null)}><button>Home</button></Link>
    </div>
  )
}

export default NotFound;