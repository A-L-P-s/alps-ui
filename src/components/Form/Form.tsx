import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IGrammarPoint } from '../../Utilities/interfaces';
import { getPrompt, postSubmission } from '../../Utilities/api-calls';
import infoIcon from '../../assets/info_icon.svg';
import Modal from 'react-modal';
import Instructions from '../Instructions/Instructions';
import Loading from '../Loading/Loading';
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
  const [sent2, setSent2] = useState<string>('');
  const [feedbackId, setFeedbackId] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false)
  const [inputError, setInputError] = useState<Boolean>(false)

  const navigate = useNavigate();
  
  useEffect(() => {
    if (feedbackId) {
      navigate(`/${userId}/feedback/${feedbackId}`);
    }
  }, [feedbackId, navigate, userId]);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    if (userId) {
      getPrompt(userId)
        .then(prompt => {
          if (prompt) {
            const promptAttributes = prompt.data.attributes
  
            setImgUrl(promptAttributes.image_url);
            setImgAlt(promptAttributes.image_alt_text);
            setVerb(promptAttributes.verb);
            setEngVerb(promptAttributes.eng_verb);
            setGrammarPoints(promptAttributes.grammar_points);
          }
        })
        .catch(error => {
          console.error('An error occurred:', error);
          setError(error.toString())
        });
    }
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
          setLoading(false)
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
        setError(error.toString())
        setLoading(false)
      })
    } else if (!sent1 || !sent2) {
      setInputError(true)
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
            <input
              id='sent1'
              type='text'
              value={sent1}
              placeholder='Enter your sentence'
              onChange={event => setSent1(event.target.value)}
            />
          </div>
          <div className='sentence-container'>
            {grammarPoints.length && <label htmlFor='sent2'>{grammarPoints[1].grammar_point} | {grammarPoints[1].eng_grammar_point}</label>}
            <input
              id='sent2'
              type='text'
              value={sent2}
              placeholder='Enter your sentence'
              onChange={event => setSent2(event.target.value)}
            />
          </div>
        </div>
        <div className='submit-button-container'>
          {/* FIND WAY TO HANDLE LINK WHEN USERNAME IS UNDEFINED */}
          {inputError && <p>Please complete both sentences to receive feedback for your work!</p>}
          <Link to={`/${userId}/feedback/1`} className='submit-link'>
            <button className='submit-button' onClick={event => handleClick(event)}>Submit</button>
          </Link>
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