var arr = [
    12, 
    89
];

arr[1] = 4;
arr[2] = "Noam";
arr[3] = true;


//  [12 , 4 Noam, true]

var user = {
    name:"Noam", 
    age:95, 
    address:"Ramat Gan", 
    gender: "male", 
    employee: true 
};

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


console.log(arr.length);
console.log(user.length);




user.height = 201;
user["weight"] = 100;





console.log(user);

if(user["employee"] == true) {
    emp = "emplyee";
} else {
    emp = "not emplyee";
}
console.log(user["name"] + "  live in " + user["address"]);
console.log(user["name"] + "  is " + user["age"] + " years ago");
console.log(user["name"] + "  is " + emp);
console.log(user["name"] + "  is " + user["gender"]);

console.log(user.name + "  live in " + user.address);
console.log(user.name + "  is " + user.age + " years ago");
console.log(user.name + "  is " + emp);
console.log(user.name + "  is " + user.gender);
console.log(user.name + "  is " + user.height + "cm");
console.log(user.name + "  is " + user.weight + " kg");


console.log(arr);

alert(arr[0])




for (let index = 0; index < 20; index++) {
    console.log(arr[index]);

    
}

