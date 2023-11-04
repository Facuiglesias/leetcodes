// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function romanToInt(s) {
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }; // Creamos una tabla con los valores de los numeros romanos

  let sum = 0; // Creamos una variable en la que guardaremos el resultado final

  for (let i = 0; i < s.length; i++) {
    // Recorremos el string obtenido
    if (value[s[i]] < value[s[i + 1]]) {
      // Comprobamos si el valor del numero romano en la posicion "i" es menor al numero romano en la posicion "i + 1"
      sum += value[s[i + 1]] - value[s[i]];
      // Al ser menor, se restan los valores y se agregan a la variable que tendra el resultado final
      i++; // Salteamos la siguiente posicion ya que la hemos usado en este loop
    } else {
      sum += value[s[i]];
      // Al ser mayor, simplemente se agrega a la variable que tendra el resultado final
    }
  }
  return sum; // Devolvemos el resultado final
}

console.log(romanToInt("VI"));
