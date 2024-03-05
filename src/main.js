import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let impuesto1 = new Impuestos(17000, 700);
let cliente1 = new Cliente('Julieta', impuesto1);
let resultado = cliente1.calcularImpuesto();
console.log(cliente1);

console.log ( `Total: ${resultado}`);