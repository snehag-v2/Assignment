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