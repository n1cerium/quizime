import AnimeGuess from "./AnimeGuess";
import { useState, useEffect } from "react";
import { useRandomAnime } from "../../custom-hooks/useRandomAnime";
import Loader from "../Loader";

export default function GuessCharacter({ isRandom, resetRandom }) {
  const [filter, setFilter] = useState(10);
  const [character, isLoading, setIsLoading] = useRandomAnime(
    "https://api.jikan.moe/v4/random/characters"
  );
  const instruction =
    "The image shown below is either blurred out or zoomed " +
    "in a random coordinate. Each wrong guesses will " +
    "slowly clear the image or slowly zoom out " +
    "of the image to reveal a little bit who the " +
    "character might be. Anya is pointing to where to " +
    "enter your guess";
  const characterName = character.name;
  const [randomCoordinates, setRandomCoordinates] = useState({
    x: "50%",
    y: "50%",
  });
  const [randomFilter, setRandomFilter] = useState(0);
  const filterTypes = [
    {
      transform: "scale(" + filter + ")",
      transformOrigin: `${randomCoordinates.x} ${randomCoordinates.y}`,
    },
    { filter: `blur(${filter}px)` },
  ];

  useEffect(() => {
    setRandomCoordinates({
      x: `${Math.floor(Math.random() * 100) + 1}%`,
      y: `${Math.floor(Math.random() * 100) + 1}%`,
    });
    setRandomFilter(Math.floor(Math.random() * 2));
  }, [isLoading]);
  useEffect(() => {
    let imgTemp = character.images?.jpg?.image_url;
    if (imgTemp === undefined) return;

    let imagesSplit = imgTemp?.split("/");
    if (
      !isLoading &&
      imagesSplit[imagesSplit?.length - 1] === "apple-touch-icon-256.png"
    ) {
      setIsLoading(true);
    }
  }, [isLoading, setIsLoading, character]);

  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() !== characterName.toLowerCase()) {
      setFilter((s) => (s - 0.3 > 1.0 ? s - 0.3 : 1));
      return;
    }
    if (isRandom) {
      resetRandom(Math.floor(Math.random() * 6));
      return;
    }
    setFilter(10);
    setIsLoading(true);
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Character"
      onCheckCorrectGuess={handleCheckGuessing}
      specialInstructions={instruction}
      isDataLoading={isLoading}
    >
      <div id="anime-guess-character-zoom-effect">
        <img
          style={filterTypes[randomFilter]}
          id="anime-guess-character-image"
          src={character.images?.jpg?.image_url}
          alt={character.name}
        />
      </div>
    </AnimeGuess>
  );
}
