import { useEffect, useState } from "react";
import { isAlnum } from "../../utilities/function-utilities";
import DigitalKeyboard from "../DigitalKeyboard";
import AnimeGuess from "./AnimeGuess";
import NeutralBocchi from "../../images/guess_title/bocchi_neutral.png";
import BocchiHappy1 from "../../images/guess_title/bocchi_happy_1.png";
import BocchiHappy2 from "../../images/guess_title/bocchi_happy_2.png";
import BocchiHappy3 from "../../images/guess_title/bocchi_happy_3.png";
import BocchiHappy4 from "../../images/guess_title/bocchi_happy_4.png";
import BocchiHappy5 from "../../images/guess_title/bocchi_happy_5.png";
import BocchiSad1 from "../../images/guess_title/bocchi_sad_1.png";
import BocchiSad2 from "../../images/guess_title/bocchi_sad_2.png";
import BocchiSad3 from "../../images/guess_title/bocchi_sad_3.png";
import BocchiSad4 from "../../images/guess_title/bocchi_sad_4.png";
import BocchiSad5 from "../../images/guess_title/bocchi_sad_5.png";

export default function GuessTitle() {
  const [hiddenTitle, setHiddenTitle] = useState("");
  const animeTitle = "That Time I Got Reincarnated as a Slime Season 2";
  const instructions =
    "Use the digital keyboard to reveal part of the Anime Title. " +
    "If you know the name already, please enter your answer where " +
    "Anya is pointing at. You have until Bocchi starts glitching to " +
    "guess correctly. If you guess part of the title correctly, Bocchi will slowly be happy.";

  const imagesLives = [
    BocchiSad5,
    BocchiSad4,
    BocchiSad3,
    BocchiSad2,
    BocchiSad1,
    NeutralBocchi,
    BocchiHappy1,
    BocchiHappy2,
    BocchiHappy3,
    BocchiHappy4,
    BocchiHappy5,
  ];
  const [numberOfGuess, setNumberOfGuess] = useState(6);
  const [guess, setGuess] = useState("");

  useEffect(() => {
    setHiddenTitle(
      animeTitle
        .split("")
        .map((char) => (isAlnum(char) ? "_" : char))
        .join("")
    );
  }, []);

  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() === animeTitle.toLowerCase()) {
      console.log("correct");
    } else {
      setNumberOfGuess((guesses) => guesses - 1);
    }
  }
  function handleGetKeys(key) {
    if (!animeTitle.includes(key)) {
      setNumberOfGuess((guesses) => guesses - 1);
    }

    if (animeTitle.includes(key) && !hiddenTitle.includes(key)) {
      setNumberOfGuess((guesses) =>
        guesses < imagesLives.length ? guesses + 1 : guesses
      );
    }

    let revealHiddenKey = hiddenTitle
      .split("")
      .map((char, index) =>
        animeTitle[index].toLowerCase() === key ? animeTitle[index] : char
      )
      .join("");

    setHiddenTitle(revealHiddenKey);
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Anime Title"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
    >
      <img
        id="anime-guess-title-lives"
        src={imagesLives[numberOfGuess - 1]}
        alt="mango box bocchi"
      />
      {
        <div id="anime-title-hangman">
          {hiddenTitle.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      }
      <DigitalKeyboard onClick={handleGetKeys} />
    </AnimeGuess>
  );
}
