var arr = [12,"hjhjhj",23,34,45,56,67,78,89,"noam"];
var output = "";
printArr();

alert(output);
































function printArr() {
    for (var index = 0; index < arr.length; index++) {
       output += "Item number " + index + " on the arr variable is: " + arr[index] + "\n";
    }
}

/*
var users= [];


do {
    key = users.length;
    users[key] = {};
    users[key].name = prompt("name please : ");
    users[key]["age"] = prompt("age please : ");
    oneMore = confirm("one more ??? ");
} while (oneMore == true)


for (var index = 0; index < users.length; index++) {
    console.log(users[index]);
    
}

*/


/*
var i = 0;




noam();
noam();
noam();
noam();
noam();



function noam() {
    i++;
    alert(" i m Noam function");
}


console.log(i);

*/