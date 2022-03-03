import {useState} from "react"
import "./styles.css"

const Accordion = ({question, answer}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button className={`accordion ${active && "active"}`} onClick={() => setActive(!active)}>{question}</button>
      <div className="panel">
        <p>
          {answer}
        </p>
      </div>
    </>
  );
};


export default Accordion;