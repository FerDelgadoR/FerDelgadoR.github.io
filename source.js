console.log("Hello world!");

var x = "name";

var personName = "Cristian";
var person_name = "Fer";

console.log(typeof x);

console.log(3+6/9);

var fullName = personName + " " + person_name;

alert(fullName);

// Boolean

var bool = false;

var test = 3>1;

console.log(test);

//Logic
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

// Control

if( 3<2){
    console.log("if is true");
} else {
    console.log("if is false");
}

var test = "a";

switch(test){
case "a":
console.log("You choose a");
break;
case "b":
console.log("You choose b");
break;
default:
console.log("You choose another");
}

// Loop

var c = 1;

while(c < 10){
    console.log("while "+c);
    c++;
}

var c =1;

do {
    console.log("first")
} while (false);


for (var i=0; i<10 ; i+=2){
    console.log("for "+i);
}


// functions

function sum(a,b){
    var result = a+b;
    return result;
}

console.log(sum(5,6));

var subs = function(a,b){
    return a-b;
}

console.log(subs(5,6));

