const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let morseArr = [];
  let morseCode = '';

  for (let i = 0; i < expr.length; i += 10) {
    let morsePart = expr.slice(i, i + 10);

    if (morsePart == '**********') {
      morseArr.push(' ');
    } else {
      let morseCode = morsePart.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
      morseArr.push(morseCode);
    }
    morseArr.push(morseCode);
  }

  return morseArr
    .map((code) => {
      if (code === ' ') {
        return ' ';
      } else {
        return MORSE_TABLE[code] || '';
      }
    })
    .join('');
}

module.exports = {
  decode,
};
