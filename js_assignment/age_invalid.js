// Create an employee object; if (age>17 and age<65) print the age else throw an error saying 'Invalid age' (Note:assignment operator)

let employee = {
   name : 'Nitish Kumar',
   id:'1234',
   age : 20,

};

Object.defineProperty(employee, 'age',{

   set: function (age) {
       if (age <= 65 && age >= 17) {
           return age;
       } else {
           throw 'Enter the valid age';
       }
   }
});
console.log(employee.age=99);
