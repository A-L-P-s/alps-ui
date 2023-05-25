import { Link } from 'react-router-dom';
import mexicanFlag from '../../assets/mexico.png';
import turkeyFlag from '../../assets/turkey.png';
import vietnamFlag from '../../assets/vietnam.png';
import './User.css';

interface IProps {
  name: string,
  preferred_lang: string,
  id: string
}

const User = ({ name, preferred_lang, id }: IProps): JSX.Element => {

  const avatar = name === 'Deniz' ? turkeyFlag : name === 'Alexis' ? mexicanFlag : vietnamFlag;

  return (
    <div className='user'>
      <img src={avatar} alt={`${avatar} icon`} className='avatar-icons'></img>
      <p className='user-name'>{name}</p>
      <Link to={`/${id}/dashboard`}><button>{`Practice ${preferred_lang}!`}</button></Link>
    </div>
  );
}

export default User;