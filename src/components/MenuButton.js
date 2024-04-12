export default function MenuButton({ src, name, alt, onClick }) {
  return (
    <button className="menu-button" onClick={onClick}>
      <img src={src} alt={alt} />
      <span>{name}</span>
    </button>
  );
}
