import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ISentences } from '../../Utilities/interfaces';
import './Feedback.css';

// MOCK DATA
import mockFeedback from '../../sampleData/feedback';

// MOCK DATA PATH
const mockData = mockFeedback.data.attributes;

const Feedback = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('')
  const [verb, setVerb] = useState<string>('');
  const [engVerb, setEngVerb] = useState<string>('');
  const [sentences, setSentences] = useState<ISentences[]>([]);

  useEffect(() => {
    //fetch goes here someday
    setImgUrl(mockData.image_url);
    setImgAlt(mockData.image_alt_text);
    setVerb(mockData.verb);
    setEngVerb(mockData.eng_verb);
    setSentences(mockData.sentences);
  }, []);

  return (
    <div className='feedback-container'>
      <img src={imgUrl} alt={imgAlt} className='prompt-img'/>
      {sentences.length && <div className='sentences-container'>
        <h2>{verb}</h2>
        <h3>{engVerb}</h3>
        <h4>{sentences[0].grammar_point} | {sentences[0].eng_grammar_point}</h4>
        <h5>Your Sentence</h5>
        <p>{sentences[0].user_sent}</p>
        <h5>Corrected Sentence</h5>
        <p>{sentences[0].ai_sent}</p>
        <p>{sentences[0].ai_explanation}</p>
        {/* Will need to make the username dynamic */}
        <Link to={'/55/dashboard'}>
          <button>Home</button>
        </Link>
      </div>}
    </div>
  );
}

export default Feedback;