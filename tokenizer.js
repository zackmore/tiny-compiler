function tokenizer(input) {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    let char = input[current];

    // (
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }

    // )
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // whitespace
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // numbers
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({
        type: 'number',
        value,
      });
      continue;
    }

    // double quotes
    if (char === '"') {
      let value = '';
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      tokens.push({ type: 'string', value, });
      continue;
    }

    // name
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'name', value, });
      
      continue;
    }

    // unexpected
    throw new TypeError('I dont know what this charater is: ' + char);
  }

  return tokens;
}

module.exports = tokenizer;
