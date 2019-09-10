function insert(num) {
    document.getElementById("showContent").value = document.getElementById("showContent").value + num;
}

function clearText() {
    document.getElementById("showContent").value = "";
}

function equal() {
    var result = eval(document.getElementById("showContent").value);
    document.getElementById("showContent").value = result;
}

function back() {
    var number = document.getElementById("showContent").value;
    var backspace = number.substring(0,number.length-1);
    document.getElementById("showContent").value = backspace;
}