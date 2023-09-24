// var suma = 0;
// suma = suma + 1;
// suma = suma + 2;
// suma = suma + 3;
// suma = suma + 4;

// console.log(suma)

//BUCLE FOR
// for (var i=0 ; i<5 ; i++ ) {
//     suma = suma +i;
//     console.log("Variable de iteracion:", i);
// }
// console.log("Variable suma", suma);

//BUCLE WHILE
// while (suma < 3){
//     suma = suma +1;
//     console.log(suma);
// }

function doWhile(num) {
    let contador = 0;  // 1. Inicializa una variable llamada "contador" en 0.
    
    do {
      num += 5;        // 2. Aumenta el valor de "num" en 5 en cada iteración del bucle.
      contador++;      // 3. Incrementa el contador de iteraciones en 1 en cada iteración.
    console.log("Iteracion:", contador); console.log("Num:",num)} 
    while (contador < 8); // 4. Ejecuta el bucle "do-while" mientras "contador" sea menor que 8.
    
    return num;        // 5. Retorna el valor final de "num" después de realizar las 8 iteraciones.
  }
  
  // Ejemplo de uso:
  console.log(doWhile(10)); // Devolverá 50 (10 + 5 * 8)