console.log("Step 1 ");
let arr = [];
for (let i = 1; i <= 1000; i++) {
  arr.push(i);
}
console.log('Array 1 To 1000 :', arr);

function divisibleFactory(z){
  const divisibleFunction = () => arr.filter(val => val % z === 0);
  return divisibleFunction;
}

// apply your function
// const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;

// Numbers divisible by 3
const divisibleBy3 = divisibleFactory(5);
console.log("Numbers divisible by 3 :", divisibleBy3());

// Numbers divisible by 10 
const divisibleBy10 = divisibleFactory(10);
console.log("Numbers divisible by 10 :", divisibleBy10());

// Numbers divisible by 21 
const divisibleBy21 = divisibleFactory(21);
console.log("Numbers divisible by 21 :", divisibleBy21());

// Numbers divisible by 1 upto 30

let NumbersDivisble1To30 = [];
for (let i = 1; i <= 30; i ++){
    const divisibleByNum = divisibleFactory(i);
    NumbersDivisble1To30.push(divisibleByNum().length);
}
console.log("Numbers divisible by 1 upto 30 :", NumbersDivisble1To30);
