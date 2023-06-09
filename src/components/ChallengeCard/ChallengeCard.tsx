import { Link } from 'react-router-dom';
import './ChallengeCard.css';

interface IProps {
  challenge_id: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  date: string,
  userId: string
}

const ChallengeCard = ({ verb, userId, eng_verb, challenge_id, image_url, image_alt_text, date }: IProps): JSX.Element => {
  return (
    <Link to={`/${userId}/feedback/${challenge_id}`} style={{textDecoration: 'none'}}>
    <div className='challenge-card'>
      <img src={image_url} alt={image_alt_text}></img>
      <div className='card-content'>
        <p className='card-info'>{date}</p>
        <h3>{verb}</h3>
        <h4>({eng_verb})</h4>
      </div>
    </div>
    </Link>
  );
}

export default ChallengeCard;