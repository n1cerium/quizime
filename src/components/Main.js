import Grimmjow from "../images/button_images/chibi_grimmjow.png";
import Kakashi from "../images/button_images/chibi-kakashi.png";
import Megumin from "../images/button_images/chibi-megumin.png";
import Bocchi from "../images/button_images/chibi_bocchi.png";
import Natsu from "../images/button_images/chibi_natsu.png";
import Taiga from "../images/button_images/chibi_taiga.png";
import MenuButton from "./MenuButton";
import { useState } from "react";
import GuessTitle from "./menu_options/GuessTitle";
import GuessCharacter from "./menu_options/GuessCharacter";
import GuessNumber from "./menu_options/GuessNumber";
import GuessTheme from "./menu_options/GuessTheme";
import GuessSeiyuu from "./menu_options/GuessSeiyuu";

export default function Main() {
  const [menuOptions, setMenuOptions] = useState({
    isCharacter: false,
    isTitle: false,
    isNumber: false,
    isTheme: false,
    isSeiyuu: false,
    isMenuOpen: true,
  });

  function handleOpeningMenuOption(menuToOpen) {
    setMenuOptions({
      isCharacter: false,
      isTitle: false,
      isNumber: false,
      isTheme: false,
      isSeiyuu: false,
      isMenuOpen: false,
    });

    setMenuOptions((options) => ({
      ...options,
      ...menuToOpen,
    }));
  }

  return (
    <>
      {menuOptions.isMenuOpen && (
        <div id="menu">
          <MenuButton src={Taiga} name="Daily" alt="chibi taiga" />
          <MenuButton
            src={Grimmjow}
            name="Title"
            alt="chibi grimmjow"
            onClick={() => handleOpeningMenuOption({ isTitle: true })}
          />
          <MenuButton
            src={Kakashi}
            name="Character"
            alt="chibi kakashi"
            onClick={() => handleOpeningMenuOption({ isCharacter: true })}
          />
          <MenuButton
            src={Megumin}
            name="Number"
            alt="chibbi megumin"
            onClick={() => handleOpeningMenuOption({ isNumber: true })}
          />
          <MenuButton
            src={Bocchi}
            name="Theme"
            alt="chibi bocchi"
            onClick={() => handleOpeningMenuOption({ isTheme: true })}
          />
          <MenuButton
            src={Natsu}
            name="Seiyuu"
            alt="chibi natsu"
            onClick={() => handleOpeningMenuOption({ isSeiyuu: true })}
          />
        </div>
      )}
      {menuOptions.isTitle && <GuessTitle />}
      {menuOptions.isCharacter && <GuessCharacter />}
      {menuOptions.isNumber && <GuessNumber />}
      {menuOptions.isTheme && <GuessTheme />}
      {menuOptions.isSeiyuu && <GuessSeiyuu />}
    </>
  );
}
