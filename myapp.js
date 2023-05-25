
function all() {
   return function() {
      return("hello emmanuel");
   }
}
console.log(all ()());  // parenthesis represents the functions params




// this will output the first letter

function app() {
   var name = "emmy";
   console.log(name["0"]);
}
app();




// this will output the name(s) in the object base on the for loop statement

var obj = [{name: "emmy", age: "21"}, {name: "nelson", age: "45"}, {name: "dave", age: "14"}]  // implementing objects 

// console.log(obj[0],obj[1]);

for (var i = 0; i < obj.length; ++i) {
   console.log(obj[i].name);
}
// objects has to do with keys and values




function greet(user, user2) {
   
   console.log("hello " + user + user2)
  // return 0;

}
greet("john ", "mark"); // greet user





 // slice method
 var fruits = "hello where are you going";

 var res = fruits.slice(0,16); // 0-starting, 16-ending
  console.log(res);
 
 
  // replace method
  var value = "emma Tayo";
  var replace = value.replace(/tayo/ig, "chinweokwu");
  console.log(replace)
 
  // push method
 let names = new Array("john", "ayi", "rose");
 names.push("dera","dave");
 console.log(names);
 
 
 // push method using join method
 let age = new Array();
 age.push(6,7,8,9)
 let join = age.join();
 console.log(join)





// this will remove repeated value(s) in the array   

let numbs = [2,3,5,1,6,2];

let unique;   // declaration 

unique = [...new Set(numbs)];   // set which can hold any value of a datatype   // ... spread operator

console.log(unique.sort());




