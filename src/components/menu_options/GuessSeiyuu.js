import AnimeGuess from "./AnimeGuess";
import BocchiHappy3 from "../../images/guess_title/bocchi_happy_3.png";
import BocchiHappy4 from "../../images/guess_title/bocchi_happy_4.png";
import BocchiHappy5 from "../../images/guess_title/bocchi_happy_5.png";
import BocchiSad1 from "../../images/guess_title/bocchi_sad_1.png";
import BocchiSad2 from "../../images/guess_title/bocchi_sad_2.png";
import BocchiSad3 from "../../images/guess_title/bocchi_sad_3.png";
import { useState } from "react";

export default function GuessSeiyuu() {
  const imagesArray = [
    BocchiHappy3,
    BocchiHappy4,
    BocchiHappy5,
    BocchiSad3,
    BocchiSad2,
    BocchiSad1,
  ];
  const [numberOfCharacters, setNumberOfCharacters] = useState(2);
  const seiyuu = "bocchi";
  const instructions =
    "Anya wants you to guess which voice actor/actress " +
    "voices the following characters. For every wrong " +
    "guess, you will be given additional character. " +
    "However, you will only be limited to six characters " +
    "if the VA voices more than six character";

  function handleCheckGuessing(guess) {
    if (
      guess.toLowerCase() !== seiyuu.toLowerCase() &&
      numberOfCharacters <= 6
    ) {
      setNumberOfCharacters((no) => no + 1);
    }
  }

  return (
    <AnimeGuess
      guessQuestion="Guess the Seiyuu"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
    >
      <ul id="anime-guess-seiyuu-voices">
        {imagesArray.map(
          (im, index) =>
            numberOfCharacters > index && (
              <li>
                <img src={im} alt="bocchi" />
              </li>
            )
        )}
      </ul>
    </AnimeGuess>
  );
}
