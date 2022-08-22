export default function Die(props) {
  const heldStyles = props.isHeld ? "die-is-held" : "die-is-not-held";

  const faces = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
  };

  const face = faces[props.value];

  const dots = [
    <span class="dot"></span>,
    <>
      <span class="dot"></span>
      <span class="dot"></span>
    </>,
    <>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </>,
    <>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </>,
    <>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="column">
        <span class="dot"></span>
      </div>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </>,
    <>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div class="column">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </>,
  ];

  return (
    <div
      onClick={props.holdDice}
      className={`die-face ${heldStyles} ${face}-face`}
    >
      {face === "first" && dots[0]}
      {face === "second" && dots[1]}
      {face === "third" && dots[2]}
      {face === "fourth" && dots[3]}
      {face === "fifth" && dots[4]}
      {face === "sixth" && dots[5]}
    </div>
  );
}
