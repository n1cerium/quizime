import AnyaPointing from "../../images/button_images/anya-forger-pointing.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../ButtonIcon";
import { useState } from "react";
import { useMountedAnim } from "../../custom-hooks/useMountedAnim";
export default function AnimeGuess({
  guessQuestion,
  children,
  specialInstructions,
  onCheckCorrectGuess,
}) {
  const [isInstructionOpen, setIsInstructionOpen] = useState(false);
  const [guess, setGuess] = useState("");
  const isRendered = useMountedAnim(isInstructionOpen, 1000);

  function handleOpenInstruction() {
    setIsInstructionOpen((open) => !open);
  }
  function handleSubmitGuess() {
    onCheckCorrectGuess(guess);
  }
  return (
    <div className="anime-box">
      <div id="anime-guess-type">
        <div id="anime-guess-header">
          <h6>
            {guessQuestion}
            <ButtonIcon
              className="button-icon"
              icon={faAngleDown}
              onClick={handleOpenInstruction}
            />
          </h6>
          {isRendered && (
            <div
              className={`anime-instructions ${
                isInstructionOpen
                  ? "anime-guess-instructions-open"
                  : " anime-guess-instructions-close"
              }`}
            >
              {isInstructionOpen && (
                <>
                  <h6>Instructions</h6>
                  <p>{specialInstructions}</p>
                </>
              )}
            </div>
          )}
        </div>

        {children}
      </div>
      <div id="anime-guess-input">
        <img src={AnyaPointing} alt="Anya Pointing" />
        <input
          type="text"
          placeholder="Type your guess here..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmitGuess}>Guess</button>
        <p>Error</p>
      </div>
    </div>
  );
}
