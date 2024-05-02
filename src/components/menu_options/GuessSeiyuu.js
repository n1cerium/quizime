import AnimeGuess from "./AnimeGuess";
import { useEffect, useState } from "react";
import { useRandomSeiyuu } from "../../custom-hooks/useRandomSeiyuu";
import Loader from "../Loader";

export default function GuessSeiyuu({ isRandom, resetRandom }) {
  const [seiyuuVoices, seiyuuName, isLoading, setIsLoading] = useRandomSeiyuu();

  const [seiyuu, setSeiyuu] = useState([]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(0);
  //const seiyuuName = "bocchi";
  const instructions =
    "Anya wants you to guess which voice actor/actress " +
    "voices the following characters. For every wrong " +
    "guess, you will be given additional character. " +
    "However, you will only be limited to six characters " +
    "if the VA voices more than six character";

  useEffect(() => {
    if (!isLoading && Object.values(seiyuuVoices).length <= 6) {
      setIsLoading(true);
    }
  }, [isLoading, seiyuuVoices, setIsLoading]);
  useEffect(() => {
    let tempSeiyuu = Object.values(seiyuuVoices);
    tempSeiyuu = tempSeiyuu.filter((seiyuu) => {
      let tempImageArr = seiyuu.character.images.jpg.image_url.split("/");
      return tempImageArr[tempImageArr.length - 1] !== "questionmark_23.gif";
    });
    //let tempSeiyuus = seiyuusArray.slice(0, 5);
    tempSeiyuu = tempSeiyuu.reduce((acc, current) => {
      let tempNoDupsArray = acc.slice();
      let characterName = current.character.name;
      if (
        !tempNoDupsArray.some((curr) => curr.character.name === characterName)
      ) {
        //tempNoDups.push(characterName);
        tempNoDupsArray.push(current);
      }

      return tempNoDupsArray;
    }, []);

    if (tempSeiyuu.length <= 6) {
      setIsLoading(true);
      return;
    }

    setSeiyuu(tempSeiyuu.slice(0, 6));
  }, [seiyuuVoices, setIsLoading, seiyuuName]);
  function handleCheckGuessing(guess) {
    if (
      guess.toLowerCase() !== seiyuuName?.toLowerCase() &&
      numberOfCharacters <= 6
    ) {
      setNumberOfCharacters((no) => no + 1);
      return;
    }
    if (isRandom) {
      resetRandom(Math.floor(Math.random() * 6));
      return;
    }

    setIsLoading(true);
  }

  return (
    <AnimeGuess
      guessQuestion="Guess the Seiyuu"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
      isDataLoading={isLoading}
    >
      <ul id="anime-guess-seiyuu-voices">
        {seiyuu.map(
          (char, index) =>
            index <= numberOfCharacters && (
              <li key={index}>
                <img
                  src={char?.character?.images?.jpg?.image_url}
                  alt={char?.character?.name}
                />
              </li>
            )
        )}
      </ul>
    </AnimeGuess>
  );
}
