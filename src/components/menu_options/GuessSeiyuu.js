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
  const [seiyuuVoices, seiyuuName, level, setLevel, isLoading, setIsLoading] =
    useRandomSeiyuu("https://api.jikan.moe/v4/random/people");

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
    console.log("seiyuu name: " + seiyuuName);
    console.log(seiyuuVoices);
    console.log("Un-filtered");
    console.log(Object.values(seiyuuVoices));
    let tempSeiyuu = Object.values(seiyuuVoices);
    tempSeiyuu = tempSeiyuu.filter((seiyuu) => {
      let tempImageArr = seiyuu.character.images.jpg.image_url.split("/");
      return tempImageArr[tempImageArr.length - 1] !== "questionmark_23.gif";
    });
    //let tempSeiyuus = seiyuusArray.slice(0, 5);
    console.log("----------------");
    console.log("Filtered");
    console.log(tempSeiyuu);
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

    console.log("----------------");
    console.log("No Duplicatges");
    console.log(tempSeiyuu);

    if (tempSeiyuu.length <= 6) {
      setIsLoading(true);
      return;
    }

    setSeiyuu(tempSeiyuu.slice(0, 6));
  }, [seiyuuVoices, setIsLoading, seiyuuName]);
  function handleCheckGuessing(guess) {
    console.log(seiyuuName);
    console.log(seiyuu);

    if (
      guess.toLowerCase() !== seiyuuName?.toLowerCase() &&
      numberOfCharacters <= 6
    ) {
      setNumberOfCharacters((no) => no + 1);
      return;
    }

    setLevel((l) => l + 1);
    setIsLoading(true);
  }

  return (
    <AnimeGuess
      guessQuestion="Guess the Seiyuu"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
      level={level}
    >
      {seiyuuVoices && (
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
      )}
    </AnimeGuess>
  );
}
