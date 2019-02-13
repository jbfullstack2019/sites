var howManyNumbers, numbers = [];


howManyNumbers = parseInt(prompt("Please enter how many numbers to insert:"));
for (var index = 0; index < howManyNumbers; index++) {
    numbers[index] = prompt("number " + index);
}

// console.log (typeof numbers);

// choosenNumber = parseInt(prompt("Please enter the number posiotion:"));
// console.log("Your " + choosenNumber + " number was : - " + numbers[choosenNumber]);



for (var index = 0; index < howManyNumbers; index++) {
    if(index % 2 == 1) {
        console.log(index + ": " + numbers[index]);
    }
}

// console.log(numbers[3]);




// var num = 9;
// var str = "9";
// var bool = true;
// var numbers = [1, 45, 899];


// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// numbers[3] = 90;
// console.log(numbers[3]);



// numbers[0] = 52;
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

