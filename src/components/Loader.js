import Waiting from "../images/Waiting.gif";

export default function Loader() {
  return (
    <div id="anime-loader">
      <img src={Waiting} alt="an anime character waiting" />
      <span>Please wait while I gather data ...</span>
    </div>
  );
}
