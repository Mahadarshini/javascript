// //unary
// let x = 1;
// x=-x;
// alert(x);
// //binary
// let x1=1,y=3;
// alert(y-x1);

// // Remainder %
// alert(5%2);
// alert(11%0);
// alert(8%2);

// //exponentiation
// alert(2**2);
// alert(2**3);
// alert(2**(1/2));

// //string concatenation
// let u="hii"+"there";
// alert(u);
// alert('1'+2);
// alert(2+'1');
// alert(2+2+'1');
// alert('1'+2+2);
// alert(6-'2');
// alert('6'/'2');

// //Numeric conversion unary+
// let x2=1;
// alert (+x);

// let y1=-2;
// alert(+y1);

// alert(+true);
// alert(+"");

// alert(true);

// //numeric conversion binary
// let a=22;
// let b=23;
// alert(a+b);
// //convert it into 
// alert(+a + +b);

// //assignment = returns a value
// let a1=1;
// let b1=2;
// let c1=3-(a1=b1+1);
// alert(a1);
// alert(c1);

// //chaining assignments
// let a0 , b0 , c0;
// a0=b0=c0=2+2;
// alert(a0);
// alert(b0);
// alert(c0);
// //to write it with more readability
// //c0=2+2;b0=c0;a0=c0;

// //modify in place
// let n=5;
// n+=2;
// n*=2;
// alert(n);
// n*=5+2;
// alert(n);

let counter=2;
counter++;
console.log(counter);
counter--;
console.log(counter);

//bitwise operator
//(and &) (or |) (XOR ^) (NOT ~) (LEFT SHIFT <<) (RIGHT SHIFT >>) (ZERO-FILL RIGHT SHIFT >>>)

//comma 
let d=(1+2 , 3+4);
console.log(d);

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

console.log(Number(a) + Number(b)); // 12