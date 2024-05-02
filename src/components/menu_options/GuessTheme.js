import AnimeGuess from "./AnimeGuess";
import AIDancing from "../../images/AIDancing.gif";
import {
  faPlay,
  faArrowRotateRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../ButtonIcon";

import { useRef, useState, useEffect } from "react";
import { useRandomTheme } from "../../custom-hooks/useRandomTheme";

export default function GuessTheme({ isRandom, resetRandom }) {
  const [theme, animeName, isLoading, setIsLoading] = useRandomTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(5);
  const [themes, setThemes] = useState([]);
  const randomValForTheme = Math.floor(Math.random() * themes?.length);
  const audioElement = useRef(null);
  const instructions =
    "For every wrong guess, the duration of the audio will be " +
    "added by a few seconds. You will be given a random anime " +
    "opening or ending that will start an audio interval of 3 seconds, " +
    "so Anya wants you to try to guess which anime it is from.";

  useEffect(() => {
    if (!isLoading && Object.values(theme).length === 0) {
      setIsLoading(true);
      return;
    }
    if (!isLoading) {
      setThemes(theme[0].animethemes);
    }
  }, [isLoading, setIsLoading, theme]);

  function handleStartAudio() {
    isPlaying ? audioElement.current.pause() : audioElement.current.play();
    setIsPlaying((playing) => !playing);
  }
  function handleReplay() {
    audioElement.current.currentTime = 0;
    audioElement.current.pause();
  }

  function handleDuration() {
    const currTime = Math.floor(audioElement.current.currentTime);
    if (currTime === duration) {
      audioElement.current.pause();
      setIsPlaying(false);
      handleReplay();
    }
  }
  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() !== animeName.toLowerCase()) {
      setDuration((duration) => duration + 3);
      audioElement.current.currentTime = 0;
      audioElement.current.pause();

      return;
    }

    if (isRandom) {
      resetRandom(Math.floor(Math.random() * 6));
      return;
    }

    audioElement.current.currTime = 0;
    setIsLoading(true);
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Theme"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
      isDataLoading={isLoading}
    >
      <>
        <div className="anime-guess-audio-button">
          <ButtonIcon
            icon={isPlaying ? faPause : faPlay}
            onClick={handleStartAudio}
          />
          <ButtonIcon icon={faArrowRotateRight} onClick={handleReplay} />
        </div>

        <audio ref={audioElement} onTimeUpdate={handleDuration}>
          <source
            src={
              themes[randomValForTheme]?.animethemeentries[0]?.videos[0]?.audio
                ?.link
            }
            type="audio/ogg"
          ></source>
        </audio>
        <div id="anime-guess-theme-dancing">
          <img src={AIDancing} alt="AI from Oshi no ko dancing" />
          <img src={AIDancing} alt="AI from Oshi no ko dancing" />
          <img src={AIDancing} alt="AI from Oshi no ko dancing" />
        </div>
      </>
    </AnimeGuess>
  );
}
