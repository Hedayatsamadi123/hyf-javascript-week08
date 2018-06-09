console.log("Step-1");

let array = [];
for (let i = 1; i <= 1000; i++){
    array.push(i);
}

console.log('Array 1 To 1000 :',array);

function divisibleFactory (z){
    function check(array){
        return array.filter(num => num % z === 0);
    }
    return check;
}
// Numbers divisible by 3
check3 = divisibleFactory(3);
// Numbers divisible by 10
check10 = divisibleFactory(10);
// Numbers divisible by 21
check21 = divisibleFactory(21);

console.log("Numbers divisible by 3 :",check3(array));
console.log("Numbers divisible by 10 :",check10(array));
console.log("Numbers divisible by 21 :",check21(array));


// Numbers divisible by 1 upto 30
function count(numbers ){
    return function sum (array){
        // console.log(numbers.length, array.length);

         const newArray = numbers.map((number) => {
            var  checkN = divisibleFactory(number);
            var arrayN = checkN(array);
            return arrayN.length;
         });
         console.log("Numbers divisible by 1 upto 30 :",newArray);
    }

}
let numbers = [];
for(let i = 1; i <= 30; i++){
    numbers.push(i)
}
const sumFunction = count (numbers);
sumFunction(array);



