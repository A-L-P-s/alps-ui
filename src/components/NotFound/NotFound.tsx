import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = (): JSX.Element => {
  return (
    <div className='not-found'>
      <h1>Uh oh!</h1>
      <h3>It looks like this page no longer exists. Please return home and try again!</h3>
      <Link to='/'><button>Home</button></Link>
    </div>
  )
}

export default NotFound;