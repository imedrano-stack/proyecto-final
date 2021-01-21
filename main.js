require('./Expresion');
const math = require('mathjs-expression-parser');
 
// Editar expresión
const expr = '4+5+3*2*6-8*3/6'; s

console.log('----------------------------------------------------');

console.log('Resultado de la expresión: \r');
console.log(math.eval(expr, {}));

console.log;('----------------------------------------------------')