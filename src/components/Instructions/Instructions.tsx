import './Instructions.css';

const Instructions = (): JSX.Element => {
  return (
    <div className='instructions'>
      <h2>Let's Summit this Challenge!</h2>
      <p>The best way to retain a language is to practice your words, and a picture is worth a thousand! We're giving you a picture, a verb, and some grammar points to get you started.</p>
      <p>Challenge your knowledge and flex those creative muscles by writing sentences using the provided verb in a way that conforms to the rules of the grammar point. The image is there to help you break through any writer's block you may have. Feel free to write about it, or ignore it completely! The choice is yours.</p>
      <p>Once you're done, click "Submit" and brace yourself for immediate feedback!</p>
    </div>
  );
}

export default Instructions;