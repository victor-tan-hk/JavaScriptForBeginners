

let startNumber = 20;
let endNumber = 40;

for (let i = startNumber; i <= endNumber; i++) {

  let isItPrimeNumber = true;
  let flag = 0;
  // i = 23
  // j = 23
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isItPrimeNumber = false;
      break;
    }
  }

  if (i > 1 && isItPrimeNumber) {
    console.log("A prime number is ", i);
  }
}



