// Given two binary strings a and b, return their sum as a binary string.

const a = "11",
  b = "1";

function addBinary(a, b) {
  const result = [];
  let arrastre = 0;
  let bComplete = b.split("");
  let aComplete = a.split("");
  let diff;
  if (a.length > b.length) {
    diff = a.length - b.length;
    while (diff > 0) {
      bComplete.unshift("0");
      diff--;
    }
    for (i = a.length - 1; i >= 0; i--) {
      if (a[i] == 1 && bComplete[i] == 1) {
        if (arrastre != 0) {
          result.unshift(1);
          // arrastre -= 1;
        } else {
          result.unshift(0);
          arrastre += 1;
        }
      } else if (a[i] == 1 && bComplete[i] == 0) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (a[i] == 0 && bComplete[i] == 1) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (a[i] == 0 && bComplete[i] == 0) {
        if (arrastre != 0) {
          result.unshift(1);
          arrastre -= 1;
        } else {
          result.unshift(0);
        }
      }
    }
    // if (arrastre == 0) {
    //   result.unshift(1);
    // }
    if (arrastre != 0) {
      result.unshift(1);
      arrastre -= 1;
    }
    return result.join("");
  } else if (a.length < b.length) {
    diff = b.length - a.length;
    while (diff > 0) {
      aComplete.unshift("0");
      diff--;
    }
    for (i = b.length - 1; i >= 0; i--) {
      if (b[i] == 1 && aComplete[i] == 1) {
        if (arrastre != 0) {
          result.unshift(1);
          // arrastre -= 1;
        } else {
          result.unshift(0);
          arrastre += 1;
        }
      } else if (b[i] == 1 && aComplete[i] == 0) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (b[i] == 0 && aComplete[i] == 1) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (b[i] == 0 && aComplete[i] == 0) {
        if (arrastre != 0) {
          result.unshift(1);
          arrastre -= 1;
        } else {
          result.unshift(0);
        }
      }
    }
    // if (arrastre == 0) {
    //   result.unshift(1);
    // }
    if (arrastre != 0) {
      result.unshift(1);
      arrastre -= 1;
    }
    return result.join("");
  } else if ((a.length = b.length)) {
    for (i = b.length - 1; i >= 0; i--) {
      if (b[i] == 1 && a[i] == 1) {
        if (arrastre != 0) {
          result.unshift(1);
          // arrastre -= 1;
        } else {
          result.unshift(0);
          arrastre += 1;
        }
      } else if (b[i] == 1 && a[i] == 0) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (b[i] == 0 && a[i] == 1) {
        if (arrastre != 0) {
          result.unshift(0);
          // arrastre -= 1;
        } else {
          result.unshift(1);
        }
      } else if (b[i] == 0 && a[i] == 0) {
        if (arrastre != 0) {
          result.unshift(1);
          arrastre -= 1;
        } else {
          result.unshift(0);
        }
      }
    }
    if (arrastre != 0) {
      result.unshift(1);
      arrastre -= 1;
    }
    return result.join("");
  }
}

console.log(addBinary(a, b));
