// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';
import { getFeedback } from '../../Utilities/api-calls';
import { IFeedback } from '../../Utilities/interfaces';
import { useParams } from 'react-router-dom';



const Feedback = () => {
  const [feedback, setFeedback] = useState<IFeedback|undefined>();
  
  const { userId, id } = useParams();

  useEffect(() => {
    getFeedback(id, userId)
      .then(feedbackData => {
        setFeedback(feedbackData);
      })
  }, [userId, id]);

  return (
    <>
      {feedback && <div className='feedback-container'>
        <img src={feedback.data.attributes.image_url} alt={feedback.data.attributes.image_alt_text} className='prompt-img'/>
        <div className='sentences-container'>
          <h2>{feedback.data.attributes.verb}</h2>
          <h3>{feedback.data.attributes.eng_verb}</h3>
          <h4>{feedback.data.attributes.sentences[0].grammar_point} | {feedback.data.attributes.sentences[0].eng_grammar_point}</h4>
          <h5>Your Sentence</h5>
          <p>{feedback.data.attributes.sentences[0].user_sent}</p>
          <h5>Corrected Sentence</h5>
          <p>{feedback.data.attributes.sentences[0].ai_sent}</p>
          <p>{feedback.data.attributes.sentences[0].ai_explanation}</p>
          <Link to={`/${userId}/dashboard`}>
            <button>Home</button>
          </Link>
        </div>
      </div>}
    </>
  );
}

export default Feedback;