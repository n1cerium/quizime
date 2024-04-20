import AnimeGuess from "./AnimeGuess";
import AyanokojiFace from "../../images/guess_character/AyanokojiFace.png";
import DisguestedFern from "../../images/guess_character/DisgustedFern.png";
import RyoThumbsup from "../../images/guess_character/RyoThumbsup.png";
import { useState } from "react";

export default function GuessNumber() {
  const [condition, setCondition] = useState({
    src: AyanokojiFace,
    alt: "Neutral",
  });
  const animeName = "Bocchi the rock";
  const ratingValue = 4738;
  const instruction =
    "You will be given a random anime title. So, Anya " +
    "wants you to guess in which rank the random anime " +
    "is in (either by top votes or popularity votes) based " +
    "on MyAnimeList. Fern image means you guessed lower " +
    "Ryo means you guessed higher";

  function handleCheckingGuess(guess) {
    if (Number(guess) > ratingValue) {
      setCondition({ src: RyoThumbsup, alt: "You need to go Lower Value" });
    }
    if (Number(guess) < ratingValue) {
      setCondition({ src: DisguestedFern, alt: "You need to go Higher Value" });
    }
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Number"
      specialInstructions={instruction}
      onCheckCorrectGuess={handleCheckingGuess}
    >
      <div id="anime-guess-number">
        <p>{animeName} (popularity)</p>
        <img
          id="anime-guess-number-condition"
          src={condition.src}
          alt={condition.alt}
        />
      </div>
    </AnimeGuess>
  );
}
