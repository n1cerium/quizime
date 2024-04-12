import "../digitalkeyboard.css";

export default function DigitalKeyboard({ onClick }) {
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const top = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const mid = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bot = ["z", "x", "c", "v", "b", "n", "m"];

  return (
    <div id="digital-keyboard">
      <Keys onClick={onClick} data={number} />
      <Keys onClick={onClick} data={top} />
      <Keys onClick={onClick} data={mid} />
      <Keys onClick={onClick} data={bot} />
    </div>
  );
}

function Keys({ data, onClick }) {
  return (
    <div>
      {data.map((d, index) => (
        <button key={index} onClick={() => onClick(d)}>
          {d}
        </button>
      ))}
    </div>
  );
}
