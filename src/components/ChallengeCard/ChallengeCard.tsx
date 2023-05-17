import React from 'react';
import { Link } from 'react-router-dom';
import './ChallengeCard.css';

interface IProps {
  id: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  date: string,
}

const ChallengeCard = ({ verb, eng_verb, id, image_url, image_alt_text, date }: IProps) => {
  return (
    <Link to={`/Deniz/feedback/${id}`}>
    <div className='challenge-card'>
      <img src={image_url} alt={image_alt_text}></img>
      <div className='card-right-content'>
        <h2>{date}</h2>
        <h3>{verb}</h3>
        <p>({eng_verb})</p>
      </div>
    </div>
    </Link>
  );
}

export default ChallengeCard;