function myTask() {
    var num = document.getElementById("myNumberToCath").value;
    // document.getElementById("myNumberToShow").innerText = num;

    if (num > 300) {
        document.getElementById("myNumberToShow").innerText = 300;
        alert("not more than 300");
    } else if (num < 1) {
        document.getElementById("myNumberToShow").innerText = 1;
        alert("not less than 1");

    } else {
        document.getElementById("myNumberToShow").innerText = parseFloat(document.getElementById("myNumberToCath").value).toFixed(2);
    }


    localStorage.setItem('myTastNumber', num);
    sessionStorage.setItem('stam', 'noam');


}

function init() {
    document.getElementById("myNumberToCath").value = localStorage.getItem("myTastNumber");
}

function nonono() {
    localStorage.removeItem('myTastNumber')
}

