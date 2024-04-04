// var=>variable

// 1.Global scope
// 2.Local Scope

var a = "jerlin nirmala";
console.log("G1", a);
console.log("L", l); //NOT WORKED
function fun() {
  var a = "MARY";
  var l = "Nirmala mary";
  console.log("G2", a);
  console.log("L", l); // ITS WORKED
}
// //console.log("L", l); //NOT WORKED
console.log("G3", a);
fun();
// //console.log("L", l);//NOT WORKED
console.log("G4", a);

var drowback;

var d = "merlin meEra";
for (var i = 1; i < 5; i++) {
  console.log(i);
}

console.log("hi", i);
console.log("...............");

//let:

// for (let j = 1; j < 5; j++) {
//   console.log(j);
// }

// console.log("hi", j);

// console.log("...............");

// let movie = "leo"; //LET G
// function names() {
//   console.log(movie);
// }
// console.log(movie);
// names();

// console.log("...............");
// console.log("...............");

// let movie1 = "MARRI"; //LET can do re assign
// movie1 = "leo1,leo2";
// console.log(movie1);

//const
// console.log("..............."); //cant re assign const
// const hi = "amma";
// hi = "appa";
// console.log(hi);
