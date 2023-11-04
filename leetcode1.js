// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//Estructura de datos: ARRAY

//TIME COMPLEXITY: O(n2) ["For anidados"]
//SPACE COMPLEXITY: O(n) [Valor de entrada = [arr]]

const nums = [2, 7, 11, 15]; //O(1)

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Recorremos el array para obtener el primer valor
    for (let j = i + 1; j < arr.length; j++) {
      // Recorremos nuevamente el array pero empezando de la posicion "i" + 1
      if (arr[i] + arr[j] == target) {
        // Comprobamos si la suma de ambos valores obtenidos previamente es igual al "target" que estamos buscando
        // Si el condicional es true, retoramos ambas posiciones guardadas previamente
        // Si el condicional es false, el loop continua hasta encontrar los valores que estamos buscando
        // Si no conseguimos los valores que estamos buscando, devolvemos "undefined"
        return [i, j];
      }
    }
  }
}

// console.log(twoSum(nums, 9));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Estructura de datos: LINKED LIST

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function twoSumLL(list, target) {
  let currentNodeI = list.head; // Creamos una variable que obtenga el valor del primer nodo
  let currentNodeJ; // Inicializamos la variable que obtendra el valor del nodo a sumar

  for (let i = 0; i < list.length; i++) {
    // Recorremos la LinkedList
    currentNodeJ = currentNodeI.next;
    // Declaramos la variable inicializada anteriormente, obteniendo el valor del nodo siguiente
    for (let j = i + 1; j < list.length; j++) {
      // Recorremos la LinkedList nuevamente, utilizando ambos nodos conseguidos previamente
      if (currentNodeI.value + currentNodeJ.value == target) {
        // Comprobamos si la suma de los valores de los nodos obtenidos previamente es igual al "target" que estamos buscando
        return [currentNodeI, currentNodeJ];
        // Si el condicional es true, retoramos ambos nodos guardados previamente
      } else {
        currentNodeJ = currentNodeJ.next;
        // Si el condicional es false, el loop continua e igualamos el nodo obtenido previamente a su siguiente nodo
      }
    }
    currentNodeI = currentNodeI.next; // Igualamos el nodo obtenido previamente a su siguiente nodo
  }
  // Si no conseguimos los valores que estamos buscando, devolvemos "undefined"
}

const list = new LinkedList(11);
list.append(2);
list.append(15);
list.append(7);

console.log(twoSumLL(list, 13));
