
// function add(num1, num2){
    
//       return num1 + num2;
// }

// const sum= add(2, 3);
// console.log(sum);

const add = (num1, num2) => num1 + num2;
const sum = add(3, 5)
console.log(sum);



const jog =(a, b) => a+b;
const jogh = jog(77, 13);
console.log(jogh);




const mult = (num1, num2, num3) => num1 * num2 * num3;
const multi = mult(5, 4, 7);
console.log(multi);




const divy = (n1, n2)=> n1/n2;
const divided = divy(6, 3);
console.log(divided);


const sentence= `I am a web Developer.
I love to code .
I love eat biriyani. ` 

;
console.log(sentence);


const friends =[2, 4, 6, 8];
const bondhu = friends;
const dosto= [...friends]
 bondhu.push(10);
console.log(bondhu)
console.log(friends)
console.log(dosto)



const ab= (a=3, b=7)=>a + b;
const result=ab(33)
console.log(result);

const {age, z } = {x: 2, y: 3, z: 5, name:'myen', age: 46 };
console.log({age, z });


const [first , second , fourth] = ['jodhu', 'modhu', 'ram', 'sham'];
console.log( [first , second, fourth ])



