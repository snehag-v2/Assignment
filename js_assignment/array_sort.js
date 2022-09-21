// [4,8,15,16,23,12]  Write a code to sort this array 

let a=[4,8,15,16,23,12];

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    
}

console.log(a);
