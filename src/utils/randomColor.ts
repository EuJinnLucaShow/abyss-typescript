export const randomColor = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (color === "#ffffff" || color === "#ffffff") {
    randomColor();
  } else {
    return color;
  }
};
