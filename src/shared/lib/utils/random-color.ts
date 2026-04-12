export function randomColor(mode: string = "light") {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 40; // 40–70%
  const lightness =
    mode === "dark"
      ? Math.floor(Math.random() * 20) + 60 // 60–80%
      : Math.floor(Math.random() * 20) + 25; // 25–45%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
