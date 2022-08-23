"use strict";


// 1

for (let i = 1, arrTree = []; i <= 20; i++) {
  arrTree.push('x');
  console.log(arrTree.join(""));
}

// 2

for (let i = ""; i.length <= 20; console.log(i += "x")) { }

// 3

for (let i = 1; i <= 20; i++) {
  console.log("x".repeat(i));
}
