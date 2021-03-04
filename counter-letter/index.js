/**
 * param: hhhyyyaattrrrmmccc
 * result { h: 3 }, { y: 3 } { t: 2 } { r: 3 } { m: 2 } { c:3 }
 */
const str = 'hhhyyyaattrrrmmcccabddd';

const counterLetter = (str) => {
  const splitedStr = str.split('');
  let count = 1;
  let backLetter = '';
  const result = [];

  splitedStr.forEach((letter, idx) => {
    if (idx === 0) return backLetter = letter;

    if (backLetter === letter) count++;

    if (backLetter != letter) {
      result.push({ [backLetter]: count });
      backLetter = letter;
      count = 1;
    }

    if (idx === splitedStr.length - 1) {
      result.push({[backLetter]: count });
    }
  });

  return result;
}

console.log(counterLetter(str));