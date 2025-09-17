/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x - queen.y === king.x - king.y ||
    queen.x + queen.y === king.x + king.y
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let n = num;
  let result = '';

  while (n >= 10) {
    result += 'X';
    n -= 10;
  }

  if (n === 9) {
    return `${result}IX`;
  }

  if (n >= 5) {
    result += 'V';
    n -= 5;
  }

  if (n === 4) {
    return `${result}IV`;
  }

  while (n > 0) {
    result += 'I';
    n -= 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numStr) {
  let result = '';
  let space = '';

  for (let i = 0; i < numStr.length; i += 1) {
    const ch = numStr[i];

    switch (ch) {
      case '-':
        result += `${space}minus`;
        space = ' ';
        break;
      case '.':
      case ',':
        result += `${space}point`;
        space = ' ';
        break;
      case '0':
        result += `${space}zero`;
        space = ' ';
        break;
      case '1':
        result += `${space}one`;
        space = ' ';
        break;
      case '2':
        result += `${space}two`;
        space = ' ';
        break;
      case '3':
        result += `${space}three`;
        space = ' ';
        break;
      case '4':
        result += `${space}four`;
        space = ' ';
        break;
      case '5':
        result += `${space}five`;
        space = ' ';
        break;
      case '6':
        result += `${space}six`;
        space = ' ';
        break;
      case '7':
        result += `${space}seven`;
        space = ' ';
        break;
      case '8':
        result += `${space}eight`;
        space = ' ';
        break;
      case '9':
        result += `${space}nine`;
        space = ' ';
        break;
      default:
        break;
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (num === 0 && digit === 0) return true;
  let n = num;
  while (n > 0) {
    if (n % 10 === digit) return true;
    n = (n - (n % 10)) / 10;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) leftSum += arr[j];
    for (let j = i + 1; j < arr.length; j += 1) rightSum += arr[j];
    if (leftSum === rightSum) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */

function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = num;
      num += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = num;
      num += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix;
  for (let i = 0; i < n / 2; i += 1) {
    for (let j = i; j < n - i - 1; j += 1) {
      const temp = m[i][j];
      m[i][j] = m[n - j - 1][i];
      m[n - j - 1][i] = m[n - i - 1][n - j - 1];
      m[n - i - 1][n - j - 1] = m[j][n - i - 1];
      m[j][n - i - 1] = temp;
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function sortByAsc(arr) {
  const array = arr;

  function quickSort(left, right) {
    let l = left;
    let r = right;

    while (l < r) {
      let i = l;
      let j = r;

      const mid = Math.floor((l + r) / 2);
      let pivot = array[mid];

      if (array[l] > array[mid] !== array[l] > array[r]) pivot = array[l];
      else if (array[r] > array[mid] !== array[r] > array[l]) pivot = array[r];

      while (i <= j) {
        while (array[i] < pivot) i += 1;
        while (array[j] > pivot) j -= 1;

        if (i <= j) {
          [array[i], array[j]] = [array[j], array[i]];
          i += 1;
          j -= 1;
        }
      }

      if (j - l < r - i) {
        if (l < j) quickSort(l, j);
        l = i;
      } else {
        if (i < r) quickSort(i, r);
        r = j;
      }
    }
  }

  quickSort(0, array.length - 1);
  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const n = str.length;
  if (n <= 1 || iterations === 0) return str;

  const perm = [];
  let even = 0;
  let odd = Math.floor((n + 1) / 2);
  for (let i = 0; i < n; i += 1) {
    if (i % 2 === 0) {
      perm[i] = even;
      even += 1;
    } else {
      perm[i] = odd;
      odd += 1;
    }
  }

  const process = [];
  for (let i = 0; i < n; i += 1) process[i] = false;
  let cycleLen = 1;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  for (let i = 0; i < n; i += 1) {
    if (!process[i]) {
      let len = 0;
      let cur = i;
      while (!process[cur]) {
        process[cur] = true;
        cur = perm[cur];
        len += 1;
      }
      if (len > 0) cycleLen = (cycleLen * len) / gcd(cycleLen, len);
    }
  }

  const k = iterations % cycleLen;
  if (k === 0) return str;

  let res = '';
  const tmp = [];
  for (let i = 0; i < n; i += 1) tmp[i] = str[i];

  for (let step = 0; step < k; step += 1) {
    const next = [];
    for (let i = 0; i < n; i += 1) next[perm[i]] = tmp[i];
    for (let i = 0; i < n; i += 1) tmp[i] = next[i];
  }

  for (let i = 0; i < n; i += 1) res += tmp[i];

  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const digits = [];
  let n = number;
  while (n > 0) {
    digits.unshift(n % 10);
    n = (n - (n % 10)) / 10;
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i -= 1;
  if (i < 0) return number;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) j -= 1;

  const temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;

  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;
    left += 1;
    right -= 1;
  }

  let res = 0;
  for (let k = 0; k < digits.length; k += 1) {
    res = res * 10 + digits[k];
  }
  return res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
