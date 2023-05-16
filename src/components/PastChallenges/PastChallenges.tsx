import { useState } from 'react';
import mockUser from '../../sampleData/user';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import './PastChallenges.css';

interface IChallenge {
  challenge_id: string,
  language: string,
  verb: string,
  eng_verb: string,
  image_url: string,
  image_alt_text: string,
  created_at: string
}

interface IProps {
  challenges: IChallenge[]
}

const PastChallenges = ({ challenges }: IProps) => {
  const [pastChallenges, setPastChallenges] = useState(challenges)

  const challengeCards = pastChallenges.map(challenge => {
    return (
      <ChallengeCard 
        verb={challenge.verb}
        image_url={challenge.image_url}
        image_alt_text={challenge.image_alt_text}
        date={challenge.created_at}
      />
    )
  })

  return (
    <div className='challenge-card-container'>
      {challengeCards}
    </div>
  );
}

export default PastChallenges;