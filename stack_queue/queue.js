// USING FUNCTION

function Queue1(){
    let items = [];
  
    function add(element) {
      items.push(element);
      return items;
    }
  
    function remove() {
      return items.shift();
    }
  
    function peek() {
      return items[0];
    }
  
    function isEmpty() {
      return items.length === 0;
    }
  
    function size() {
      return items.length;
    }
    function printQueue(){
        return items;
    }
    function clear() {
      items = [];
    }

    return {add,remove,peek,isEmpty,size,clear,printQueue};
  }

let que1 = Queue1(20);
que1.add("item 0");   // item 0
que1.add("item 1");   // item 0, item 1
que1.remove();    // item 0

console.log(que1.size());
console.log(que1.peek());
console.log(que1.isEmpty());
console.log(que1.printQueue());

// USING CONSTRUCTOR

class Queue{
    constructor(){
        this.items=[];
    }
        add=function(element){
            this.items.push(element);
            return this.items;
        }

        remove=function(){
            return this.items.shift();
        }

        peek=function(){
            return this.items[0];
        }
    
        isEmpty=function(){
            return this.items.length===0;
        }
    
        
        size=function(){
            return this.items.length;
        }
    
        printQueue=function(){
            return this.items;
        }
}

let que1 = new Queue(20);
que1.add("item 0");   // item 0
que1.add("item 1");   // item 0, item 1
que1.remove();    // item 0

console.log(que1.size());
console.log(que1.peek());
console.log(que1.isEmpty());
console.log(que1.printQueue());
