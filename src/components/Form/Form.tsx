import React, { useEffect, useState } from 'react';
import './Form.css';
import infoIcon from '../../assets/info_icon.svg';

// MOCK DATA
import mockPrompt from '../../sampleData/prompt';

// MOCK PATH
const mockData = mockPrompt.data.attributes;
const mockGrammar = mockData.grammar_points;

interface IGrammarPoint {
  grammar_point: string;
  eng_grammar_point: string;
}

const Form = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [imgAlt, setImgAlt] = useState<string>('')
  const [verb, setVerb] = useState<string>('');
  const [engVerb, setEngVerb] = useState<string>('');
  const [grammarPoints, setGrammarPoints] = useState<IGrammarPoint[]>([]);
  const [sent1, setSent1] = useState<string>('');
  const [sent2, setSent2] = useState<string>('');

  useEffect(() => {
    //fetch new challenge someday
    setImgUrl(mockData.image_url);
    setImgAlt(mockData.image_alt_text);
    setVerb(mockData.verb);
    setEngVerb(mockData.eng_verb);
    setGrammarPoints(mockGrammar);
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
      <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;