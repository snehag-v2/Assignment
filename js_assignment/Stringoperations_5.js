ss=[];
se=[];
let index=0;
function removeDuplicate(values){
    
  for(let i=0;i<values.length;i++){
    var s =new Set();
    for(let j=0;j<values[i].length;j++){
       s[i]=values[i].toLowerCase();
       ss[i]=removeDuplicateChar(s[i]);       
    }

}
console.log(ss);
}

function removeDuplicateChar(str) {
  var len = str.length,
    char,
    charCount = {},
    newStr = [];
  for (var i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j] == 1) newStr.push(j);
  }
  return newStr.join("");
}
values= ['belle', 'candy', 'distributed', '113', 'Test' ,'T!esT!', ' money ', 'test apples', '$$%^*&','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet metus et sodales dapibus. Fusce sodales in odio sit amet ornare. Proin suscipit elit at dui ornare molestie. Suspendisse congue finibus tellus, vel gravida lacus auctor non. Aliquam odio ex, venenatis vel pellentesque eu, cursus vel est. Etiam elementum ante odio, ac venenatis massa consequat ac. Pellentesque malesuada porta risus eget aliquam. Praesent suscipit ut justo tempus vehicula. Praesent hendrerit libero eu pharetra ornare. Sed nisi leo, laoreet vel dictum sed, finibus quis sem.'];
removeDuplicate(values);

// FOR TEST CASE:

function removeDuplicates(str) {
    var len = str.length,
      char,
      charCount = {},
      newStr = [];
    for (var i = 0; i < len; i++) {
      char = str[i].toLOwerCase();
      if (charCount[char]) {
        charCount[char]++;
      } else charCount[char] = 1;
    }
    for (var j in charCount) {
      if (charCount[j] == 1) newStr.push(j);
    }
    return newStr.join("");
  }
 let values = ['belle', 'candy', 'distributed', '113', 'Test', 'T!esT!', ' money ', 'test apples', '$$%^*&','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet metus et sodales dapibus. Fusce sodales in odio sit amet ornare. Proin suscipit elit at dui ornare molestie. Suspendisse congue finibus tellus, vel gravida lacus auctor non. Aliquam odio ex, venenatis vel pellentesque eu, cursus vel est. Etiam elementum ante odio, ac venenatis massa consequat ac. Pellentesque malesuada porta risus eget aliquam. Praesent suscipit ut justo tempus vehicula. Praesent hendrerit libero eu pharetra ornare. Sed nisi leo, laoreet vel dictum sed, finibus quis sem.'];

 let expected = ['b','candy', 'srbue', '3', 'es', 'es', 'money',' al', '%^*&', 'xj'];

 values.forEach((e,o)=>{removeDuplicates(e)!==expected[o]?(console.error("\n\n------- Failed -------"),console.error(`Test: ${e}`),console.error(`Result: ${removeDuplicates(e)}`),console.error(`Expected: ${expected[o]}`)):(console.log("\n\n------- Success -------"),console.log(`Test: ${e}`),console.log(`Result: ${removeDuplicates(e)}`))});

// without using loop removeDuplicates

let s = "'belle', 'candy', 'distributed', '113', 'Test' ,'T!esT!', ' money ', 'test apples', '$$%^*&','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet metus et sodales dapibus. Fusce sodales in odio sit amet ornare. Proin suscipit elit at dui ornare molestie. Suspendisse congue finibus tellus, vel gravida lacus auctor non. Aliquam odio ex, venenatis vel pellentesque eu, cursus vel est. Etiam elementum ante odio, ac venenatis massa consequat ac. Pellentesque malesuada porta risus eget aliquam. Praesent suscipit ut justo tempus vehicula. Praesent hendrerit libero eu pharetra ornare. Sed nisi leo, laoreet vel dictum sed, finibus quis sem.";
function removeDuplicates(s) {
    var h={}; 
    return s.split("").
      map(function(c){h[c] |= 0; h[c]++; return c}).
      filter(function(c){return h[c] == 1}).
      join("");
   }
console.log(removeDuplicates(s))  
