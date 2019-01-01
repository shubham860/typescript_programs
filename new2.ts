//interface
function fullname(person : {firstname: string, lastname: string}){
  console.log(`${person.firstname}  ${person.lastname}`);
}

var p = {
  firstname : 'shubham',
   lastname : 'chauhan'
};

fullname(p);

//arrow function
let message = "hello world";

let l = (message) => console.log(message);
l(message);
