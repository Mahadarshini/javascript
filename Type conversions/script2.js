//string conversion
let val=true;
alert(typeof val);
val=String(val);
alert(typeof val);

// numeric conversion
alert("8"/"2");
let str="123";
alert(typeof str);

str=Number(str);
alert(typeof str);

let age = Number("Hello");
alert(age);
//examples 
alert(Number("  132  "));
alert(Number("123abc"));
alert(Number(true));
alert(Number(false));

//Boolean conversion
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean("hello"));
alert(Boolean(""));
alert(Boolean("0"));
alert(Boolean(" "));

