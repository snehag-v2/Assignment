// Given an array, return an array where the each value is the product of the next two items: E.g. [3, 4, 5] -> [20, 15, 12]
 
let a = [3,4,5] 

function arr(num){
    let x = num.reduce((a,b)=>a*b,1);
     return num.map((b)=>x/b);
 }
 console.log(arr(a));
 console.log("\t");

// without division

 function fn(ary) {
    return ary.map(ele => {
      return ary.reduce((acc, val) => {
        if (val !== ele) {
          acc = acc * val;
        }
        return acc;
      },1)
    });
  }
  let st = [0,4,5]
  console.log(fn(st));


// Using Array.reduce method,  implement Array.map

function mapfn(t,ar){
    const r = []
    const p = (q , cur) => {
        q.push(t(cur))
        return q;
    }
    return ar.reduce(p,r)
}

let s = [1,2,3,4]
let t = ele => ele+2;
const res = mapfn(t,s);
console.log(res);
console.log("\t");

// Implement Array.prototype methods (flat, map, reduce, concat) by yourself using JavaScript.

//flat()
function flat1(arr, d = 1) {
    if (!Array.isArray(arr)) {
      return arr;
    }
    return d > 0
      ? arr.reduce((acc, val) => acc.concat(flat1(val, d - 1)), [])
      : arr.slice();
}
let arr3 = [1, 2, [3, 4, [5, [6]],[7,[8]]]];
console.log(flat1(arr3, 1));
console.log("\t");

//map()
    Array.prototype.map1 = function(callback){
        let result = [];
        let length = this.length;
        for (let i = 0; i < length; i++) {
        let value = callback(this[i]);
        result.push(value);
        }
        return result;
    }

let array = [1,2,3]
console.log(array.map1((e)=>e*10));
console.log("\t");

//reduce()
Array.prototype.reduce1 = function(callback,accumulator){
    let length = this.length;
    for (let i = 0; i < length; i++) {
    accumulator = callback(this[i],accumulator);
    }
    return accumulator;
}

let arr1 = [7,8,9]
console.log(arr1.reduce1((acc,e)=>acc+e,0));
console.log("\t");

//concat()
Array.prototype.concat1 =  function(...items){
    let res =[];
    for(let i=0;i<this.length;i++){
        res.push(this[i])
    }
    for(let j=0;j<items.length;j++){
        res.push(items[j])
    }
    return res;
}

let arr2 = [0,1,2]
console.log(arr2.concat1(3,4,5));
console.log("\t");

// Write a program to execute an array of promise in sequence?

const promise1 = new Promise(function(res,_rej){
    setTimeout(function(){
        res("First promise")},1000);
    });

const promise2 = new Promise(function(res,rej){
    setTimeout(function(){
        //rej("Second promise is rejected");
        res("Second promise")},700);
    });

const promise3 = new Promise(function(res,_rej){
    setTimeout(function(){
        res("Third promise")},500);
    });

const promises = [promise1,promise2,promise3];

Promise.all(promises)
    .then(fn1 => console.log(fn1))
    .catch(fn2 => console.log(fn2));


