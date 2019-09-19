const compiler = require('./compiler');

const code = `(multiple 2 (subtract 4 2))`;
const newCode = compiler(code);
