import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'

function AdviceApp() {
  const [advice, setAdvice] = useState("");
  const [id, setAdviceNumber] = useState("");

  async function loadAdvice() {
    const data = await (await fetch('https://api.adviceslip.com/advice')).json();
    setAdvice(data.slip.advice);
    setAdviceNumber(data.slip.id);
  }

  useEffect(() => { loadAdvice() }, [])

  return (
    <div className="wrapper">
      <Card className="card">
        <h1 className="advice-heading"> Advice # {id}</h1>
        <p className="advice-paragraph">"{advice}"</p>
        <img src="images/pattern-divider-desktop.svg" alt="patter-divider-desktop" className="pattern-divider" />
        <img src="images/pattern-divider-mobile.svg" alt="patter-divider-desktop" className="pattern-divider-mobile" />
      </Card>
      <button onClick={loadAdvice}><img src="images/icon-dice.svg" alt="dice-icon" className="dice-image" /></button>
    </div>
  );
}

export default AdviceApp;
