//interface
function fullname(person) {
    console.log(person.firstname + "  " + person.lastname);
}
var p = {
    firstname: 'shubham',
    lastname: 'chauhan'
};
fullname(p);
//arrow function
var message = "hello world";
var l = function (message) { return console.log(message); };
l(message);
