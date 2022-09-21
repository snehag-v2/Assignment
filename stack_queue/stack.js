//Writing a program which implements a Stack and a Queue.  Both take the number of elements as the parameter.  Your program should take care of the edge cases. You cannot remove/pop from an empty Stack/Queue.  And you cannot add item to a Stack/Queue which is full. 


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




