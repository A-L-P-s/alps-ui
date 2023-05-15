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
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    //fetch new challenge someday
    setImgUrl(mockData.image_url);
    setImgAlt(mockData.image_alt_text);
    setVerb(mockData.verb);
    setEngVerb(mockData.eng_verb);
    setGrammarPoints(mockGrammar);
  }, [])

  return (
    <form>
      <img alt={imgAlt} src={imgUrl}/>
      <div>
        <h2>{verb}</h2>
        <h3>{engVerb}</h3>
        <img src={infoIcon} alt='instructions icon' />
        {grammarPoints.length && <label>{grammarPoints[0].grammar_point} | {grammarPoints[0].eng_grammar_point}</label>}
        <input type='text' />
        {grammarPoints.length && <label>{grammarPoints[1].grammar_point} | {grammarPoints[1].eng_grammar_point}</label>}
        <input type='text' />
      </div>
    </form>
  );
}

export default Form;