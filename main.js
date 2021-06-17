var first_name = "Ranbir";
var last_name = "Kapoor";
var a = 10;
var b = 5;
var add = a + b;
console.log(add);
var full_name = "";
function MERGE() {
    var first = document.getElementById("t1").value;
    var second = document.getElementById("t2").value;
    full_name = first.concat(second);
    document.getElementById("ans").innerHTML = full_name
}