import AnimeGuess from "./AnimeGuess";
import Frieren from "../../images/frieren.jpg";
import { useState, useEffect } from "react";
import { useRandomAnime } from "../../custom-hooks/useRandomAnime";
export default function GuessCharacter() {
  const [scale, setScale] = useState(4);
  const [character, level, setLevel] = useRandomAnime(
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
  const x = character.images;
  useEffect(() => {
    let imgTemp = character.images?.jpg?.image_url;

    if (imgTemp === undefined) {
      return;
    }

    let imagesSplit = imgTemp.split("/");

    if (imagesSplit[imagesSplit.length - 1] === "apple-touch-icon-256.png") {
      setLevel(level);
    }
  }, [character, level, setLevel]);
  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() !== characterName.toLowerCase()) {
      setScale((s) => (s - 0.1 > 1.0 ? s - 0.1 : 1));
      return;
    }

    setLevel((l) => l + 1);
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Character"
      onCheckCorrectGuess={handleCheckGuessing}
      specialInstructions={instruction}
      level={level}
    >
      <div id="anime-guess-character-zoom-effect">
        <img
          style={{
            filter: "brightness(100%)",
            transform: "scale(" + scale + ")",
            transformOrigin: "50% 50%",
          }}
          id="anime-guess-character-image"
          src={character.images?.jpg?.image_url}
          alt={character.name}
        />
      </div>
    </AnimeGuess>
  );
}
