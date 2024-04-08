import Grimmjow from "../images/button_images/chibi_grimmjow.png";
import Kakashi from "../images/button_images/chibi-kakashi.png";
import Bocchi from "../images/button_images/chibi_bocchi.png";
import Megumin from "../images/button_images/chibi-megumin.png";
import MenuButton from "./MenuButton";

export default function Menu() {
  return (
    <div id="menu">
      <MenuButton src={Grimmjow} name="Title" alt="chibi grimmjow" />
      <MenuButton src={Kakashi} name="Character" alt="chibi kakashi" />
      <MenuButton src={Megumin} name="Character 2" alt="chibbi megumin" />
      <MenuButton src={Bocchi} name="Theme" alt="chibi bocchi" />
    </div>
  );
}
