import './App.css';
import Accordion from './components/Accordion'

import mocks from "./mocks/questions.json"

function App() {
  return (
    <div className="App">
      <h2>Accordion</h2>
      {mocks.questions.map(question => (
        <Accordion question={question.question} answer={question.answer}/>
      ))}
    </div>
  );
}

export default App;
