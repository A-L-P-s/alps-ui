import React from 'react';
import './ChallengeCard.css';

interface IProps {
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  date: string
}

const ChallengeCard = ({ verb, eng_verb, image_url, image_alt_text, date }: IProps) => {
  return (
    <div className='challenge-card'>
      <img src={image_url} alt={image_alt_text}></img>
      <div className='card-right-content'>
        <h2>{date}</h2>
        <h3>{verb}</h3>
        <p>({eng_verb})</p>
      </div>
    </div>
  );
}

export default ChallengeCard;