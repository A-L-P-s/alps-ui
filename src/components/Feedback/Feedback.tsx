import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFeedback } from '../../Utilities/api-calls';
import { IFeedback } from '../../Utilities/interfaces';
import './Feedback.css';

interface IProps {
  setError: Function
}

const Feedback = ( { setError }: IProps): JSX.Element => {
  const [feedback, setFeedback] = useState<IFeedback|undefined>();
  
  const { userId, id } = useParams();

  useEffect(() => {
    getFeedback(id, userId)
      .then(feedbackData => {
        setFeedback(feedbackData);
        
        if (!feedbackData.data.attributes.sentences.length) {
          setError('It looks like we were unable to save this challenge data.');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString());
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <p className='sentence'>{feedback.data.attributes.sentences[0].user_sent}</p>
          <h5>Feedback</h5>
          <p className='sentence'>{feedback.data.attributes.sentences[0].ai_sent}</p>
          <p>{feedback.data.attributes.sentences[0].ai_explanation}</p>
          <h4>{feedback.data.attributes.sentences[0].grammar_point} | {feedback.data.attributes.sentences[1].eng_grammar_point}</h4>
          <h5>Sentence 2</h5>
          <p className='sentence'>{feedback.data.attributes.sentences[1].user_sent}</p>
          <h5>Feedback</h5>
          <p className='sentence'>{feedback.data.attributes.sentences[1].ai_sent}</p>
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