var howManyNumbers, res = "";


howManyNumbers = parseInt(prompt("Please enter how many numbers to insert:"));
for (var index = 1; index <= howManyNumbers; index++) {
    num = prompt("number " + index);
    res += num + "-";  
}



alert(res)



// var howManyNumbers, first, last;


// howManyNumbers = parseInt(prompt("Please insert 1 more number to add please:"));
// for (var index = 1; index <= howManyNumbers; index++) {
//     num = prompt("number " + index);
//     if(index == 1) {
//         first = num;
//     } else if(index == howManyNumbers) {
//         last = num;
//     }
    
// }



// alert("Your first number was : " + first + "\n and the last number that you entesd to the system was: " + last)







// sum = 0;
// do {
// num = prompt("Please insert 1 more number to add please:") ;
// num = parseInt(num);
// if(num % 2 == 0) {
//     console.log(num)  
//     sum += num;
// }
// } while(num != -1)


// alert(sum)












// var input = 0, sum = 0, flag = 1;

// while (flag == "1") {
//     input = prompt("Please insert 1 more number to add please:") ;

//     // input = prompt("Please insert 1 more number to add please:");
//     if(input == "=") {
//          flag = 0;
//         break;
//     }



//     input = parseInt(input);
//     sum += input ;
//     console.log(input);
// }

// console.log(sum);
