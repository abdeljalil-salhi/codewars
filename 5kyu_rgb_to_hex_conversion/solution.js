function rgb(r, g, b) {
  // Parameters validation, the values must be between 0 and 255
  if (r > 255) r = 255; else if (r < 0) r = 0;
  if (g > 255) g = 255; else if (g < 0) g = 0;
  if (b > 255) b = 255; else if (b < 0) b = 0;
  // Convert the values to hexadecimal,
  // If the value is less than 16, add a 0 to the left,
  // Then join the values and return the result
  return [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
