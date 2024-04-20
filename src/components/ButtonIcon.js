import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonIcon({ className, icon, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
