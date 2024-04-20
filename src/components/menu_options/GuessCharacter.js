import AnimeGuess from "./AnimeGuess";
import Frieren from "../../images/frieren.jpg";
import { useState } from "react";
export default function GuessCharacter() {
  const [scale, setScale] = useState(4);
  const instruction =
    "The image shown below is either blurred out or zoomed " +
    "in a random coordinate. Each wrong guesses will " +
    "slowly clear the image or slowly zoom out " +
    "of the image to reveal a little bit who the " +
    "character might be. Anya is pointing to where to " +
    "enter your guess";
  const characterName = "Frieren";

  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() !== characterName.toLowerCase()) {
      setScale((s) => (s - 0.1 > 1.0 ? s - 0.1 : 1));
    }
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Character"
      onCheckCorrectGuess={handleCheckGuessing}
      specialInstructions={instruction}
    >
      <div id="anime-guess-character-zoom-effect">
        <img
          style={{
            filter: "brightness(100%)",
            transform: "scale(" + scale + ")",
            transformOrigin: "50% 50%",
          }}
          id="anime-guess-character-image"
          src={Frieren}
          alt="frieren"
        />
      </div>
    </AnimeGuess>
  );
}
