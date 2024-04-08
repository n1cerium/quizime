export default function MenuButton({ src, name, alt }) {
  return (
    <button className="menu-button">
      <img src={src} alt={alt} />
      <span>{name}</span>
    </button>
  );
}
