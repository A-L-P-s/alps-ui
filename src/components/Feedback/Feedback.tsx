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
  
  console.log(feedback)
  const { userId, id } = useParams();

  useEffect(() => {
    getFeedback(id, userId)
      .then(feedbackData => {
        setFeedback(feedbackData);
        
        if (!feedbackData.data.attributes.sentences.length) {
          setError('Whoops! It looks like we were unable to save this challenge data.');
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
      {feedback &&
        <div className='feedback-container'>
          <img src={feedback.data.attributes.image_url} alt={feedback.data.attributes.image_alt_text} className='prompt-img'/>
          <div className='right-content'>
            <div className='feedback-header'>
              <h2>{`Your challenge from ${feedback.data.attributes.created_at}`}</h2>
            </div>
          <div className='sentences-container'>
            <h3 className='verb-assigned'>Verb assigned: <span className='verb'>{feedback.data.attributes.verb}</span></h3>
            <h4 >Sentence #1</h4>
            <h4 className='grammar-point'>{feedback.data.attributes.sentences[0].grammar_point} ✴ {feedback.data.attributes.sentences[0].eng_grammar_point}</h4>
            <div className='sentence-feedback'>
              <h5 className='feedback-section-title'>Your response</h5>
              <p className='sentence'>{feedback.data.attributes.sentences[0].user_sent}</p>
              <h5 className='feedback-section-title'>Corrected Sentence</h5>
              <p className='sentence'>{feedback.data.attributes.sentences[0].ai_sent}</p>
              <h5 className='feedback-section-title'>Feedback</h5>
              <p>{feedback.data.attributes.sentences[0].ai_explanation}</p>
            </div>

            <h4>Sentence #2</h4>
            <h4 className='grammar-point'>{feedback.data.attributes.sentences[1].grammar_point} ✴ {feedback.data.attributes.sentences[1].eng_grammar_point}</h4>
            <div className='sentence-feedback'>
              <h5 className='feedback-section-title'>Your response</h5>
              <p className='sentence'>{feedback.data.attributes.sentences[1].user_sent}</p>
              <h5 className='feedback-section-title'>Corrected Sentence</h5>
              <p className='sentence'>{feedback.data.attributes.sentences[1].ai_sent}</p>
              <h5 className='feedback-section-title'>Feedback</h5>
              <p>{feedback.data.attributes.sentences[1].ai_explanation}</p>
            </div>
          </div>
            <Link to={`/${userId}/dashboard`}><button>Back</button></Link>
        </div>
      </div>}
    </>
  );
}

export default Feedback;