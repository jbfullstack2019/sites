var arr = [];


arr[0] = "Noam";
arr[1] = 12;
arr[2] = false;
arr[3] = ["tahan", 23, true, 56];

console.log(arr[3][0]);


var arr = []

for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
        if(y == 1) {
            arr[x] = [];
        }
        arr[x][y] = x*y;
    }    
}


for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
        console.log(arr[x][y]);
    }  
    console.log("\n");  
}


