import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IChallenge } from '../../Utilities/interfaces';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import './PastChallenges.css';

interface IProps {
  challenges: IChallenge[]
}

const PastChallenges = ({ challenges }: IProps) => {
  const [pastChallenges] = useState(challenges)

  const challengeCards = pastChallenges.map(challenge => {
    return (
      <Link to='/Deniz/feedback/:challenge-id'>
      <ChallengeCard 
        verb={challenge.verb}
        eng_verb={challenge.eng_verb}
        image_url={challenge.image_url}
        image_alt_text={challenge.image_alt_text}
        date={challenge.created_at}
      /></Link>
    )
  })

  return (
    <div className='challenge-card-container'>
      {challengeCards}
    </div>
  );
}

export default PastChallenges;