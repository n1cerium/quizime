import { useEffect, useState } from "react";
import GuessCharacter from "./GuessCharacter";
import GuessNumber from "./GuessNumber";
import GuessSeiyuu from "./GuessSeiyuu";
import GuessTheme from "./GuessTheme";
import GuessTitle from "./GuessTitle";

export default function GuessRandom() {
  const [randomMenuValue, setRandomMenuValue] = useState(0);
  const guessList = [
    <GuessTitle isRandom={true} resetRandom={setRandomMenuValue} />,
    <GuessCharacter isRandom={true} resetRandom={setRandomMenuValue} />,
    <GuessNumber isRandom={true} resetRandom={setRandomMenuValue} />,
    <GuessTheme isRandom={true} resetRandom={setRandomMenuValue} />,
    <GuessSeiyuu isRandom={true} resetRandom={setRandomMenuValue} />,
  ];

  useEffect(() => {
    setRandomMenuValue(Math.floor(Math.random() * 6));
  }, []);

  return guessList[randomMenuValue];
}
