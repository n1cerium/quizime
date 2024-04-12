import { useEffect, useState } from "react";
import { isAlnum } from "../utilities/function-utilities";
import DigitalKeyboard from "./DigitalKeyboard";
import AnyaPointing from "../images/button_images/anya-forger-pointing.png";

export default function GuessTitle() {
  const [hiddenTitle, setHiddenTitle] = useState("");
  const animeTitle = "That Time I Got Reincarnated as a Slime Season 2";

  useEffect(() => {
    setHiddenTitle(
      animeTitle
        .split("")
        .map((char) => (isAlnum(char) ? "_" : char))
        .join("")
    );
  }, []);
  function handleGetKeys(key) {
    let revealHiddenKey = hiddenTitle
      .split("")
      .map((char, index) =>
        animeTitle[index].toLowerCase() === key ? animeTitle[index] : char
      )
      .join("");

    setHiddenTitle(revealHiddenKey);
  }
  return (
    <div className="anime-box">
      <p id="anime-title-hangman">{hiddenTitle}</p>
      <DigitalKeyboard onClick={handleGetKeys} />
      <div id="anime-guess-input">
        <img src={AnyaPointing} alt="Anya Pointing" />
        <input type="text" />
      </div>
    </div>
  );
}
