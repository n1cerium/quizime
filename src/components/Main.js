import Grimmjow from "../images/button_images/chibi_grimmjow.png";
import Kakashi from "../images/button_images/chibi-kakashi.png";
import Megumin from "../images/button_images/chibi-megumin.png";
import Bocchi from "../images/button_images/chibi_bocchi.png";
import Natsu from "../images/button_images/chibi_natsu.png";
import Taiga from "../images/button_images/chibi_taiga.png";
import MenuButton from "./MenuButton";
import { useState } from "react";
import GuessTitle from "./GuessTitle";

export default function Main() {
  const [isTitle, setIsTitle] = useState(false);
  const isMenuOpen = !isTitle;

  function handleOpenTitle() {
    setIsTitle(true);
  }

  return (
    <>
      {isMenuOpen ? (
        <div id="menu">
          <MenuButton src={Taiga} name="Daily" alt="chibi taiga" />
          <MenuButton
            src={Grimmjow}
            name="Title"
            alt="chibi grimmjow"
            onClick={handleOpenTitle}
          />
          <MenuButton src={Kakashi} name="Character" alt="chibi kakashi" />
          <MenuButton src={Megumin} name="Character 2" alt="chibbi megumin" />
          <MenuButton src={Bocchi} name="Theme" alt="chibi bocchi" />
          <MenuButton src={Natsu} name="Seiyuu" alt="chibi natsu" />
        </div>
      ) : (
        <GuessTitle />
      )}
    </>
  );
}
