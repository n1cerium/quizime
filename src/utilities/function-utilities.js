export function isAlnum(char) {
  if (char.toUpperCase() >= "A" && char.toUpperCase() <= "Z") return true;
  if (char >= "0" && char <= "9") return true;

  return false;
}
