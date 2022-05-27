import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import PatternDividerMobile from "../images/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../images/pattern-divider-desktop.svg";
import DiceIcon from "../images/icon-dice.svg";


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
        <img src={PatternDividerDesktop} alt="patter-divider-desktop" className="pattern-divider" />
        <img src={PatternDividerMobile} alt="patter-divider-mobile" className="pattern-divider-mobile" />
      </Card>
      <button onClick={loadAdvice}><img src={DiceIcon} alt="dice-icon" className="dice-image" /></button>
    </div>
  );
}

export default AdviceApp;
