// for (var i = 1; i <= 100; i++) {
//     if (i%2 == 0 && i%3 == 0) {
//         console.log("The number " + i + " is div by 2 and also by 3 no msheerit");
//     } else {
//         console.log("The number " + i + " is not  div by 2 and also by 3 no msheerit");

//     }
// }

// var output = ""; 
// for (var i = 1; i <= 10; i++) {
//     output += " " + i;
// }

// console.log(output);

// var output = ""; 
// for (var i = 2; i <= 20; i+=2) {
//     output += " " + i;
// }

// console.log(output);

// var output = ""; 
// for (var i = 3; i <= 30; i+=3) {
//     output += " " + i;
// }

// console.log(output);


// var output = ""; 

// for (var w = 1; w <= 10; w++) {
//     for (var i = 1; i <= 10; i++) {
//         if(w==i) {
//             output += "\t*";
//         } else {
//             output += "\t" + w*i;
//         }
//     }
//     output += "\n";
// }

// console.log(output);

var num1 = 0, num2 = 0;

do {
    num1 = parseInt(prompt("Please insert number 1 please:")) ; // 3;
} while (isNaN(num1))

do {
    num2 = parseInt(prompt("Please insert number 2 please:")); // 6;
} while (isNaN(num2))


alert(num1+num2);

// for (var w = 1; w <= 10; w++) {
//     for (var i = 1; i <= 10; i++) {
//         if(w==i) {
//             output += "\t*";
//         } else {
//             output += "\t" + w*i;
//         }
//     }
//     output += "\n";
// }

// console.log(output);