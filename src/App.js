import "./App.css";
import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";

function App() {
  const [dice, setDice] = React.useState(allNewDice(10));
  const [tenzies, setTenzies] = React.useState(false);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const rollDiceNumTimes = [];
    for (let i = 0; i < 10; i++) {
      rollDiceNumTimes.push(generateNewDie());
    }
    return rollDiceNumTimes;
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function handleDiceRoll() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((heldDie) => {
        return heldDie.id === id ? {...heldDie, isHeld: !heldDie.isHeld} : heldDie;
      })
    );
  }

  React.useEffect(() => {
    const checkDiceAreHeld = dice.every((die) => die.isHeld);
    const checkDiceAreSameValue = dice.every(
      (die) => die.value === dice[0].value
    );
    if (checkDiceAreHeld && checkDiceAreSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  const {width, height} = useWindowSize();

  return (
    <main>
      {tenzies && <Confetti width={width} height={height}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at ths
        current value beetween rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-button" onClick={handleDiceRoll}>
        {tenzies ? `New Game` : `Roll`}
      </button>
    </main>
  );
}

export default App;
