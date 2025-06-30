//numbers
alert(NaN+1);
alert(1/0);
alert("not a number" * 2);

//bigInt
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2); 
//BigInt is represented by appending 'n' to the number
console.log(900719925474099778278437n);

//string
let str='Hello';
console.log(`hii ${str}`);

//Boolean
let nameistrue=true;
let nameisfalse=false;
let isGreater=4>1;
alert(isGreater);

//null
let one = null;
console.log(one);

//undefined
let age=10;
age=undefined;
console.log(age);

//typeof
typeof undefined;
typeof true;
console.log(typeof 10);
typeof "Hello";
typeof Symbol("id");
let name="Ilya";
alert(`hello${1}`);
alert(`hello${"name"}`);
alert(`hello${name}`);
