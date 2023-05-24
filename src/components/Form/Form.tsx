import Instructions from '../Instructions/Instructions';
import Modal from 'react-modal';
import Loading from '../Loading/Loading';
import infoIcon from '../../assets/info_icon.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IGrammarPoint } from '../../Utilities/interfaces';
import { getPrompt, postSubmission } from '../../Utilities/api-calls';
import './Form.css';

interface IProps {
  userId: string | undefined,
  language: string | undefined,
  setError: Function
}

const Form = ({ userId, language, setError }: IProps): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('')
  const [verb, setVerb] = useState<string>('');
  const [engVerb, setEngVerb] = useState<string>('');
  const [grammarPoints, setGrammarPoints] = useState<IGrammarPoint[]>([]);
  const [sent1, setSent1] = useState<string>('');
  const [sent1Chars, setSent1Chars] = useState<Number>(400)
  const [sent2, setSent2] = useState<string>('');
  const [sent2Chars, setSent2Chars] = useState<Number>(400)
  const [feedbackId, setFeedbackId] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [inputError, setInputError] = useState<Boolean>(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    feedbackId && navigate(`/alps-ui/${userId}/feedback/${feedbackId}`);
  }, [feedbackId, navigate, userId]);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    userId && getPrompt(userId)
      .then(prompt => {
        if (prompt) {
          // DELETE CONSOLE.LOG BEFORE PRODUCTION
          console.log('prompt fetch data: ', prompt)
          const promptAttributes = prompt.data.attributes;

          setImgUrl(promptAttributes.image_url);
          setImgAlt(promptAttributes.image_alt_text);
          setVerb(promptAttributes.verb);
          setEngVerb(promptAttributes.eng_verb);
          setGrammarPoints(promptAttributes.grammar_points);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString());
      });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleClick: (event: React.MouseEvent<HTMLElement>) => void = (event) => {
    event.preventDefault();
    const submissionData = {
      language: language,
      verb: verb,
      eng_verb: engVerb,
      image_url: imgUrl,
      image_alt_text: imgAlt,
      sentences: [
        {
          grammar_point: grammarPoints[0].grammar_point,
          eng_grammar_point: grammarPoints[0].eng_grammar_point,
          user_sent: sent1
        },
        {
          grammar_point: grammarPoints[1].grammar_point,
          eng_grammar_point: grammarPoints[1].eng_grammar_point,
          user_sent: sent2
        }
      ]
    }

    if (userId && postSubmission && sent1 && sent2) {
      setLoading(true)
      postSubmission(userId, submissionData)
      .then(responseData => {
        if (responseData.data.id) {
          setFeedbackId(responseData.data.id);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString());
        setLoading(false);
      })
    } else if (!sent1 || !sent2) {
      setInputError(true);
    }
  }

  const openModal: () => void = () => {
    setModalIsOpen(true);
  }

  const closeModal: () => void = () => {
    setModalIsOpen(false);
  }

  return (
    <>{!loading ? <form>
      <img alt={imgAlt} src={imgUrl} className='prompt-img'/>
      <div className='challenge-container'>
        <div className='challenge-header-container'>
          <img
            className='info-icon'
            src={infoIcon}
            alt='instructions icon'
            onClick={openModal}
          />
          <h2 className='challenge-header'>Challenge</h2>
        </div>
        <div className='prompt-container'>
          <div className='verb-container'>
            <h3 className='prompt-verb'>{verb}</h3>
            <h4 className='prompt-eng-verb'>{engVerb}</h4>
          </div>
          <div className='sentence-container'>
          {grammarPoints.length && <label htmlFor='sent1'>{grammarPoints[0].grammar_point} | {grammarPoints[0].eng_grammar_point}</label>}
            <textarea
              id='sent1'
              value={sent1}
              placeholder='Enter your sentence'
              onChange={event => {
                setSent1(event.target.value)
                setSent1Chars(400 - event.target.value.length)
              }}
              maxLength={400}
            />
          <p className='chars-remaining'>{`${sent1Chars} characters remaining`}</p>
          </div>
          <div className='sentence-container'>
            {grammarPoints.length && <label htmlFor='sent2'>{grammarPoints[1].grammar_point} | {grammarPoints[1].eng_grammar_point}</label>}
            <textarea
              id='sent2'
              value={sent2}
              placeholder='Enter your sentence'
              onChange={event => {
                setSent2(event.target.value)
                setSent2Chars(400 - event.target.value.length)
              }}
              maxLength={400}
            />
          <p className='chars-remaining'>{`${sent2Chars} characters remaining`}</p>
          </div>
        </div>
        <div className='submit-button-container'>
          {inputError && <p>Please complete both sentences to receive feedback for your work!</p>}
            <button className='submit-button' onClick={event => handleClick(event)}>Submit</button>
        </div>
      </div>
      <Modal
        className='my-modal'
        isOpen={modalIsOpen}
        shouldFocusAfterRender={false}
        onRequestClose={closeModal}
        contentLabel='Instructions'
      >
        <button className='close-modal-button' onClick={closeModal}>X</button>
        <Instructions />
      </Modal>
    </form> : <Loading/>}
    </>
  );
}

export default Form;