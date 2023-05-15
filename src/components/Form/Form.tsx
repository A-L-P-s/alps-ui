import React, { useState } from 'react';
import './Form.css';
import infoIcon from '../../assets/info_icon.svg';

// MOCK DATA
import mockPrompt from '../../sampleData/prompt';

// MOCK PATH
const mockData = mockPrompt.data.attributes;
const mockGrammar = mockData.grammar_points;

const Form = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [imgAlt, setimgAlt] = useState('')
  const [verb, setVerb] = useState('');
  const [grammarPoints, setGrammarPoints] = useState([]);
  const [sentences, setSentences] = useState([])

  return (
    <form>
      <img alt="frog cat" src="https://cdn.shopify.com/s/files/1/0344/6469/products/froggyhat2_800x.jpg?v=1634330683"/>
      <div>
        <h2>{mockData.verb}</h2>
        <h3>{mockData.eng_verb}</h3>
        <img src={infoIcon} alt='instructions icon' />
        <label>{mockGrammar[0].grammar_point} | {mockGrammar[0].eng_grammar_point}</label>
        <input type='text' />
        <label>{mockGrammar[1].grammar_point} | {mockGrammar[1].eng_grammar_point}</label>
        <input type='text' />
      </div>
    </form>
  );
}

export default Form;