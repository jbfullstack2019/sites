var users= [];


do {
    insertUser();
    oneMore = confirm("one more ??? ");
} while (oneMore == true)

printUsers();


number = prompt("which user od you want to get info?");

while (number < 0 || number >= users.length) {
    number = prompt("betwen 0 to " + (users.length-1) + " please ");
}

printUser(number);











































/*
var age = 3;
var name = "Noam";
var str;

printMyStr(name, age);

function printMyStr(str1, str2) {
    str = str1 + " is my name, and my age is: " + str2 + " years old";
    console.log(str);
}

console.log(str); // ??!?!?!?!??!?
*/
/*

function print1() {
    a++;  // 4
    console.log(a);  // 4
    var c = 90;
}

function print2() {
    var a =78;
    console.log(a); // 78
}

print1();
print2();


alert(a);
alert(c);


*/