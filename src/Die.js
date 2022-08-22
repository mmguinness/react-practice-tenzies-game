export default function Die(props) {

  const styles = props.isHeld ? "die-is-held" : "die-is-not-held";

  return (
    <div onClick={props.holdDice} className={`die-face ${styles}`}>
      <h1 className="die-num">{props.value}</h1>
    </div>
  );
}
