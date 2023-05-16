import React from 'react';
import './ChallengeCard.css';

interface IProps {
  verb: string,
  image_url: string,
  image_alt_text: string,
  date: string
}

const ChallengeCard = ({ verb, image_url, image_alt_text, date }: IProps) => {
  return (
    <div className='challenge-card'>
      <h1>{verb}</h1>
      <h2>{date}</h2>
      <img src={image_url} alt={image_alt_text}></img>
    </div>
  );
}

export default ChallengeCard;