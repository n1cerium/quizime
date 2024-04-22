import AnimeGuess from "./AnimeGuess";
import Bokuyaba from "../../audio_tests/Bokuyaba.mp3";
import {
  faPlay,
  faArrowRotateRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../ButtonIcon";

import { useRef, useState, useEffect } from "react";

export default function GuessTheme() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [startTime, setStartTime] = useState(0);
  const themeName = "Bokuyaba";
  const audioElement = useRef(null);
  const instructions =
    "For every wrong guess, the duration of the audio will be " +
    "added by a few seconds. You will be given a random anime " +
    "opening or ending that will start an audio interval of 3 seconds, " +
    "so Anya wants you to try to guess which anime it is from.";

  // function startTimer(duration) {
  //   const interval = setInterval(() => {
  //     audioElement.current.pause();
  //   }, duration * 1000);

  //   setTimeout(() => clearInterval(interval), duration * 1000);
  // }

  useEffect(() => {
    setStartTime(30);
    setDuration((dur) => startTime + dur);
    audioElement.current.currentTime = startTime;
    console.log("am i run twice?");
  }, [startTime]);

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
    console.log("currtime+duration=" + duration);
    console.log("audio current time: " + currTime);
    if (currTime === duration) {
      audioElement.current.pause();
      setIsPlaying(false);
    }
  }
  function handleCheckGuessing(guess) {
    if (guess.toLowerCase() !== themeName.toLowerCase()) {
      setDuration((duration) => duration + 10);
      audioElement.current.currentTime = 0;
      audioElement.current.pause();
    }
  }
  return (
    <AnimeGuess
      guessQuestion="Guess the Theme"
      specialInstructions={instructions}
      onCheckCorrectGuess={handleCheckGuessing}
    >
      <div className="anime-guess-audio-button">
        <ButtonIcon
          icon={isPlaying ? faPause : faPlay}
          onClick={handleStartAudio}
        />
        <ButtonIcon icon={faArrowRotateRight} onClick={handleReplay} />
      </div>
      <audio ref={audioElement} onTimeUpdate={handleDuration}>
        <source src={Bokuyaba} type="audio/mpeg"></source>
      </audio>
    </AnimeGuess>
  );
}
