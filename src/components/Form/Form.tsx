import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import { IGrammarPoint } from '../../Utilities/interfaces';
import { getPrompt } from '../../Utilities/api-calls';
import infoIcon from '../../assets/info_icon.svg';

const Form = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('')
  const [verb, setVerb] = useState<string>('');
  const [engVerb, setEngVerb] = useState<string>('');
  const [grammarPoints, setGrammarPoints] = useState<IGrammarPoint[]>([]);
  const [sent1, setSent1] = useState<string>('');
  const [sent2, setSent2] = useState<string>('');

  useEffect(() => {
    getPrompt()
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
      });
  }, []);

  return (
    <form>
      <img alt={imgAlt} src={imgUrl} className='prompt-img'/>
      <div className='form-container'>
        <h2>{verb}</h2>
        <h3>{engVerb}</h3>
        <img src={infoIcon} alt='instructions icon' />
        {grammarPoints.length && <label htmlFor='sent1'>{grammarPoints[0].grammar_point} | {grammarPoints[0].eng_grammar_point}</label>}
        <input
          id='sent1'
          type='text'
          value={sent1}
          placeholder='Enter your sentence'
          onChange={event => setSent1(event.target.value)}
        />
        {grammarPoints.length && <label htmlFor='sent2'>{grammarPoints[1].grammar_point} | {grammarPoints[1].eng_grammar_point}</label>}
        <input
          id='sent2'
          type='text'
          value={sent2}
          placeholder='Enter your sentence'
          onChange={event => setSent2(event.target.value)}
        />
        {/* Will need to make this route dynamic in the future */}
      <Link to={'/Deniz/feedback/1'}>
        <button>Submit</button>
      </Link>
      </div>
    </form>
  );
}

export default Form;