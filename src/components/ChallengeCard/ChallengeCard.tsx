import React from 'react';
import './ChallengeCard.css';

interface IProps {
  verb: string,
  eng_verb: string,
  challenge_num: string,
  image_url: string,
  image_alt_text: string,
  date: string
}

const ChallengeCard = ({ verb, eng_verb, challenge_num, image_url, image_alt_text, date }: IProps) => {
  return (
    <div className='challenge-card'>
      {/* <div className='overlay'>
        <h1>{challenge_num}</h1>
      </div> */}
      <img src={image_url} alt={image_alt_text}></img>
      <div className='card-right-content'>
        <h2>{date}</h2>
        <div className='verb'>
          <h3>{verb}</h3>
          <p>({eng_verb})</p>
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;