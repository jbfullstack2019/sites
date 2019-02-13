var num = [];

do {
    num[num.length] = prompt("insert what ever ... ");
} while(num[num.length-1] != -64)

for (var index = 0; index < num.length -1 ; index++) {
    console.log("your  " + (index+1) + " input was : " + num[index]);
}
