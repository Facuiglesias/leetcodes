// Given an integer x, return true if x is a palindrome, and false otherwise.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function isPalindrome(x) {
  if (x[0] == "-") {
    // Chequeamos que el numero no sea negativo
    return false;
  }
  const xStringify = x.toString(); // Pasamos a string el numero obtenido
  const xArray = xStringify.split(""); // Lo separamos en un array
  const xArrayReverse = xArray.reverse(); // Ordenamos el array creado anteriormente a la inversa
  const xReverse = xArrayReverse.join(""); // Unimos el array
  const xReverseInt = parseInt(xReverse); // Convertimos nuevamente el string al tipo de dato number
  return x === xReverseInt; // Devolvemos "true" si el numero es capicua, o "false" si no lo es
}

console.log(isPalindrome(121));
