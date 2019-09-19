require("util").inspect.defaultOptions.depth = null;

const tokenizer = require('./tokenizer.js');
const parser = require('./parser.js');
const transformer = require('./transformer');
const generator = require('./generator');

const compiler = (code, debug = true) => {
  const trace = (type, value) => {
    console.log(`[${type.toUpperCase()}]\n`, value, '\n');
  }
  if (debug) trace('code', code);
  const tokens = tokenizer(code);
  if (debug) trace('tokens', tokens);
  const ast = parser(tokens);
  if (debug) trace('ast', ast);
  const newAst = transformer(ast);
  if (debug) trace('newast', newAst);
  const newCode = generator(newAst);
  if (debug) trace('newcode', newCode);

  return newCode;
}

module.exports = compiler;
