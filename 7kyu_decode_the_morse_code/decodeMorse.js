decodeMorse = function (morseCode) {
  function decodeLetter(letter) {
    // Return the letter from the morse code dictionary
    return MORSE_CODE[letter];
  }

  function decodeWord(word) {
    // Return the word decoded letter by letter using the decodeLetter function
    return word
      .split(" ")
      .map((letter) => decodeLetter(letter))
      .join("");
  }

  // Return the string passed as argument decoded word by word using the decodeWord function
  return morseCode
    .trim()
    .split("   ")
    .map((word) => decodeWord(word))
    .join(" ");
};
