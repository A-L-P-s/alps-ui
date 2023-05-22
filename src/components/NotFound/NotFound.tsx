import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Uh oh!</h1>
      <h3>It looks like the page you visited no longer exists. Please return home and try again!</h3>
      <Link to='/'><button>Home</button></Link>
    </>
  )
}

export default NotFound;