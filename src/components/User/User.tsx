import { Link } from 'react-router-dom';
import panda from '../../assets/panda.png'
import dog from '../../assets/dog.png'
import koala from '../../assets/koala.png'
import './User.css';

interface IProps {
  name: string,
  preferred_lang: string,
  id: string
}

const User = ({ name, preferred_lang, id }: IProps): JSX.Element => {

  const avatar = name === 'Deniz' ? panda : name === 'Hai' ? koala : dog

  return (
    <div className='user'>
      <img src={avatar} alt={`${avatar} icon`} className='avatar-icons'></img>
      <p className='user-name'>{name}</p>
      <Link to={`/${id}/dashboard`}><button>{`Practice ${preferred_lang}!`}</button></Link>
    </div>
  );
}

export default User;