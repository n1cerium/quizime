import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonIcon({ icon, onClick }) {
  return (
    <button className="button-icon" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
