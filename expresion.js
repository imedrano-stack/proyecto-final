const Arbol = require ('./Arbol')._proyect;


  let nuevoArbolBinario = new Arbol();
  
  // Editar expresion 
  let expresionArit = [4, '+', 5, '+', 3, '*', 2, '*', 6, '-', 8, '*', 3, '/', 6] //En este array puede modificar el contenido para que pueda poner la expresión que guste
  // Tome de ejemplo el 2do ejercicio de los que nos dejo de preorder y postorder
  
  for (let i = 0; i < expresionArit.length; i++) {
    nuevoArbolBinario.agregar(expresionArit[i]);
  }
  
  // Preorden
  console.log('\nRecorrido PreOrder: ');
  nuevoArbolBinario.preorden();

  // Postorden
  console.log('\nRecorrido PostOrder: ');
  nuevoArbolBinario.postorden();