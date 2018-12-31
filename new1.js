var person = ['SHUBHAM', 52];
console.log(person);
var color;
(function (color) {
    color[color["red"] = 4] = "red";
    color[color["blue"] = 5] = "blue";
    color[color["green"] = 6] = "green";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
function add(n1, n2) {
    return n1 + n2;
}
var n3 = add(1, 2);
console.log(n3);
