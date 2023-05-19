import React from 'react';
import { Link } from 'react-router-dom';
import './ChallengeCard.css';

interface IProps {
  id: number,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  date: string,
  userId: number
}

const ChallengeCard = ({ verb, userId, eng_verb, id, image_url, image_alt_text, date }: IProps) => {
  return (
    <Link to={`/${userId}/feedback/${id}`} style={{textDecoration: 'none'}}>
    <div className='challenge-card'>
      <img src={image_url} alt={image_alt_text}></img>
      <div className='card-right-content'>
        <h2 className='right-info'>{date}</h2>
        <h3>{verb}</h3>
        <p>({eng_verb})</p>
      </div>
    </div>
    </Link>
  );
}

export default ChallengeCard;