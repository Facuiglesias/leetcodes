// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Estructura de datos: Array

// TIME COMPLEXITY: O(n2) {for anidados}
// SPACE COMPLEXITY: O(n)

const arr = ["flower", "kow", "flight"];

function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  // Comprobamos que el string no este vacio

  for (let i = 0; i <= strs[0].length; i++) {
    // Recorremos el string de la primera posicion del array
    for (let j = 1; j < strs.length; j++) {
      // Recorremos los otros strings del array
      if (strs[0][i] !== strs[j][i]) {
        // Comparamos la posicion "i" del primer string del array con la posicion "i" del resto de strings dentro del array, si son iguales el loop continua
        return strs[0].slice(0, i);
        // Cuando ya no hay igualdad, se devuelven las posiciones q de los stringsque si coincidieron
      }
    }
  }
}

console.log(longestCommonPrefix(arr));
