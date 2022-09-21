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
