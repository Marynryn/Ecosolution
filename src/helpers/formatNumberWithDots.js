export const formatNumberWithDots = (number) => {
  const numStr = number.toString();
  let formatted = "";
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    count++;
    formatted = numStr[i] + formatted;
    if (count % 3 === 0 && i !== 0) {
      formatted = "." + formatted;
    }
  }

  return formatted;
};
