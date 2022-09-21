// let a=3;
// let b=4;
// function binary(a, b){
//     const sum = a+b;
//     const product = a*b;
//     return [sum, product];
//   }

//   console.log(binary(3,4));
//  

//1.Write a function that takes an argument and returns that argument.

function identity(x){
    return x;
}
console.log(identity(3));
console.log("\t");

//2.Write two binary functions, add and mul, that take two numbers and return their sum and product

function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

console.log(add(3,4));
console.log(mul(3,4));
console.log("\t");

//3. Write a function that takes an argument and returns a function that returns that argument.

function idf(){
    return (function identity(x){
        return x;
    })(3)
    
} 

console.log(idf());
console.log("\t");

//4. write a function that adds from two invocations
  
  function addf(x) {
    let z = function(y) {
      return x + y;
    }
    return z;
  }
  
  console.log(addf(3)(4));
  console.log("\t");
 
  
// function addf(){
//     return (function identity(x,y){
//         return x+y;
//     })(3,4)
    
// } 
// console.log(addf());

//5. write a function that takes a binary function and makes it callable with two invocation
 // closure property is getting applied!! review again.
function applyf(binary){
    return function(a){
      return function(b){
        return binary(a,b);
      }
    }
  }
console.log(addf(3)(4)) ;
console.log(applyf(mul)(5)(6));
console.log("\t");

//6. write a function that takes a function and an argument, and returns a function that cans supply a second argument

function curry(binary, a){
    return function(b){
      return binary(a,b);
    }
  }
//   console.log(add(4));
  console.log(curry(mul,3)(4));
  console.log("\t");

//7. Write  methodize, a function that converts a binary function to a method.

let inc = curry(add, 1);
inc = applyf(add)(1);
inc = addf(1);

console.log(inc(5));
console.log(inc(inc(5)));
console.log("\t");

// 8. Write methodize, a function that converts a binary function to a method.

function methodize(binary){
    return function(...x){
      return binary(this, ...x);
    }
  }
  
  function add(a,b){
      return a+b;
  }
  
  Number.prototype.add = methodize(add);
  
let x = (3).add(4);
  

console.log((3).add(4));
console.log("\t");

// 9. write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.

  function twice(binary){
    return function(a){
      return binary(a,a);
    }
  }
  
  var double = twice(add);
  var z = double(11) 
  
  var square = twice(mul);
  var z = square(11)

  console.log(double(11));
  console.log(square(11));
  console.log("\t");
 
//  10. write a function composeu that takes two unary functions and returns a unary function that can ball them both
  function compose(double, square){
    return function(a){
      return square(double(a));
    }
  }

  console.log(compose(double,square)(3));
