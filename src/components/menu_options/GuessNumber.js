import AnimeGuess from "./AnimeGuess";
import AyanokojiFace from "../../images/guess_character/AyanokojiFace.png";
import DisguestedFern from "../../images/guess_character/DisgustedFern.png";
import RyoThumbsup from "../../images/guess_character/RyoThumbsup.png";
import GintamaShock from "../../images/guess_character/GintamaShock.png";
import { useEffect, useState } from "react";
import { useRandomAnime } from "../../custom-hooks/useRandomAnime";

export default function GuessNumber() {
  const [condition, setCondition] = useState({
    src: AyanokojiFace,
    alt: "Neutral",
  });
  const [anime, level, setLevel, isLoading, setIsLoading] = useRandomAnime(
    "https://api.jikan.moe/v4/random/anime"
  );
  const [randomRatingType, setRandomRatingType] = useState(0);
  const animeName = anime?.title_english || anime?.title;
  const ratingTypes = [
    { type: "Popularity", value: anime?.popularity },
    { type: "Favorites", value: anime?.favorites },
    { type: "Rank", value: anime?.rank },
  ];
  const instruction =
    "You will be given a random anime title. So, " +
    "guess the rank of the random anime " +
    "(top, popularity or favortes votes) based " +
    "on MyAnimeList. Fern image means you guessed too much, " +
    "Ryo means you guessed higher, and Gintama Crew shocked means " +
    "you guess lower.";

  console.log(ratingTypes[randomRatingType].value);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    setRandomRatingType(Math.floor(Math.random() * 3));
  }, [level, isLoading]);
  function handleCheckingGuess(guess) {
    if (isNaN(guess)) return "Hey, give me a number";

    let ratingValue = ratingTypes[randomRatingType].value;

    if (
      guess > ratingValue * 0.3 + ratingValue ||
      guess < ratingValue - ratingValue * 0.3
    ) {
      setCondition({
        src: DisguestedFern,
        alt: "You guessed Way too High or Low",
      });
      return;
    }
    if (Number(guess) > ratingValue) {
      setCondition({ src: RyoThumbsup, alt: "You need to go Lower Value" });
      return;
    }
    if (Number(guess) < ratingValue) {
      setCondition({ src: GintamaShock, alt: "You need to go Higher Value" });
      return;
    }

    setLevel((l) => l + 1);
    setIsLoading(true);
    setCondition({ src: AyanokojiFace, alt: "Neutral" });
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Number"
      specialInstructions={instruction}
      onCheckCorrectGuess={handleCheckingGuess}
      level={level}
    >
      {!isLoading && (
        <div id="anime-guess-number">
          <p>
            {animeName} ({ratingTypes[randomRatingType].type})
          </p>
          <img
            id="anime-guess-number-condition"
            src={condition.src}
            alt={condition.alt}
          />
        </div>
      )}
    </AnimeGuess>
  );
}
