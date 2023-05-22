// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';
import { getFeedback } from '../../Utilities/api-calls';
import { IFeedback } from '../../Utilities/interfaces';
import { useParams } from 'react-router-dom';

interface IProps {
  setError: Function,
}

const Feedback = ( { setError }: IProps) => {
  const [feedback, setFeedback] = useState<IFeedback|undefined>();
  
  const { userId, id } = useParams();

  useEffect(() => {
    getFeedback(id, userId)
      .then(feedbackData => {
        setFeedback(feedbackData)
        console.log(feedbackData.data.attributes.sentences)
        if (!feedbackData.data.attributes.sentences.length) {
          setError('It looks like we were unable to save this challenge data.')
        }
      }
      )
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString())
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
          <h5>Sentence 1</h5>
          <p>{feedback.data.attributes.sentences[0].user_sent}</p>
          <h5>Feedback</h5>
          <p>{feedback.data.attributes.sentences[0].ai_sent}</p>
          <p>{feedback.data.attributes.sentences[0].ai_explanation}</p>
          <h4>{feedback.data.attributes.sentences[0].grammar_point} | {feedback.data.attributes.sentences[1].eng_grammar_point}</h4>
          <h5>Sentence 2</h5>
          <p>{feedback.data.attributes.sentences[1].user_sent}</p>
          <h5>Feedback</h5>
          <p>{feedback.data.attributes.sentences[1].ai_sent}</p>
          <p>{feedback.data.attributes.sentences[1].ai_explanation}</p>
          <Link to={`/${userId}/dashboard`}>
            <button>Home</button>
          </Link>
        </div>
      </div>}
    </>
  );
}

export default Feedback;