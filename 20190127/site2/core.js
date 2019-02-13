
function insertUser() {
    key = users.length;
    users[key] = {};
    users[key].name = prompt("name please : ");
    users[key]["age"] = prompt("age please : ");
}

function printUsers() {
    for (var index = 0; index < users.length; index++) {
        console.log(users[index]);
    }
}

function printUser(id) {
        console.log(users[id]);
}
