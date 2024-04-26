import AnimeGuess from "./AnimeGuess";
import BocchiHappy3 from "../../images/guess_title/bocchi_happy_3.png";
import BocchiHappy4 from "../../images/guess_title/bocchi_happy_4.png";
import BocchiHappy5 from "../../images/guess_title/bocchi_happy_5.png";
import BocchiSad1 from "../../images/guess_title/bocchi_sad_1.png";
import BocchiSad2 from "../../images/guess_title/bocchi_sad_2.png";
import BocchiSad3 from "../../images/guess_title/bocchi_sad_3.png";
import { useEffect, useState } from "react";
import { useRandomAnime } from "../../custom-hooks/useRandomAnime";
import { useRandomSeiyuu } from "../../custom-hooks/useRandomSeiyuu";
import { type } from "@testing-library/user-event/dist/type";

export default function GuessSeiyuu() {
  const [seiyuuVoices, level, setLevel, isLoading] = useRandomSeiyuu(
    "https://api.jikan.moe/v4/random/people"
  );
  const imagesArray = [
    BocchiHappy3,
    BocchiHappy4,
    BocchiHappy5,
    BocchiSad3,
    BocchiSad2,
    BocchiSad1,
  ];
  const [numberOfCharacters, setNumberOfCharacters] = useState(2);
  const seiyuuName = "bocchi";
  const instructions =
    "Anya wants you to guess which voice actor/actress " +
    "voices the following characters. For every wrong " +
    "guess, you will be given additional character. " +
    "However, you will only be limited to six characters " +
    "if the VA voices more than six character";

  useEffect(() => {
    console.log(seiyuuVoices);
    console.log(Object.values(seiyuuVoices));
    // let tempSeiyuu = Object.values(seiyuuVoices);
    // tempSeiyuu = tempSeiyuu.filter((seiyuu) => {seiyuu.character});
    //let tempSeiyuus = seiyuusArray.slice(0, 5);
    console.log("----------------");
    //console.log(tempSeiyuus);
  }, [seiyuuVoices]);
  function handleCheckGuessing(guess) {
    console.log(seiyuuVoices);
    // if (
    //   guess.toLowerCase() !== seiyuuName.toLowerCase() &&
    //   numberOfCharacters <= 6
    // ) {
    //   setNumberOfCharacters((no) => no + 1);
    // }
  }

  return (
    <AnimeGuess
      guessQuestion="Guess the Seiyuu"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
      level={level}
    >
      {" "}
      {seiyuuVoices && (
        <ul id="anime-guess-seiyuu-voices">
          {Object.values(seiyuuVoices).map((char, index) => (
            <li key={index}>
              <img
                src={char?.character?.images?.jpg?.image_url}
                alt={char?.character?.name}
              />
            </li>
          ))}
        </ul>
      )}
    </AnimeGuess>
  );
}
