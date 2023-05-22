import { useState } from 'react';
import { IChallenge } from '../../Utilities/interfaces';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import './PastChallenges.css';

interface IProps {
  challenges: IChallenge[],
  userId: string
}

const PastChallenges = ({ challenges, userId }: IProps): JSX.Element => {
  const [pastChallenges] = useState(challenges)

  const challengeCards = pastChallenges.map(challenge => {
    return (
      <ChallengeCard
        challenge_id={challenge.challenge_id}
        key={challenge.challenge_id}
        userId={userId}
        verb={challenge.verb}
        eng_verb={challenge.eng_verb}
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