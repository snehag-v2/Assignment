//Writing a program which implements a Stack and a Queue.  Both take the number of elements as the parameter.  Your program should take care of the edge cases. You cannot remove/pop from an empty Stack/Queue.  And you cannot add item to a Stack/Queue which is full. 

//      USING FUNCTION

    function Stack(){
    let items = [];
  
    function push(element) {
      items.push(element);
    }
  
    function pop() {
      return items.pop();
    }
  
    function peek() {
      return items[items.length - 1];
    }
  
    function isEmpty() {
      return items.length === 0;
    }
  
    function size() {
      return items.length;
    }
    function printStack(){
        return items;
    }
    function clear() {
      items = [];
    }

    return {push,pop,peek,isEmpty,size,clear,printStack};
  }

let stack1 = Stack(20);
stack1.push("item 0");   // item 0
stack1.push("item 1");   // item 0,item 1
stack1.pop();            // item 1

console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.printStack());

// USING CONSTRUCTOR 

class Stack{

    constructor(){
        this.items=[];
    }

    push=function(element){
        this.items.push(element);
    }
    
    pop=function(){
        return this.items.pop();
    }

    peek=function(){
        return this.items[this.items.length-1];
    }

    isEmpty=function(){
        return this.items.length===0;
    }

    
    size=function(){
        return this.items.length;
    }

    printStack=function(){
        return this.items;
    }
}
let stack1 = new Stack(20);
stack1.push("item 0");  // item 0
stack1.push("item 1");  // item 0, item 1
stack1.pop();         // item 1

console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.printStack());

// USING ARRAY 

function Stack(){
  var x = Array.prototype;   // or var x =[];
  return x;
}

let stack1  = Stack ();
stack1.push("item 0");
stack1.push("item 1");
stack1.pop();

console.log(stack1);




