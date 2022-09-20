
//1.  Create a function which takes a single argument (no of lines) and prints the following triangle
n = 5;
string="";
count=1;


for ( i = 1; i <= n; i++) {

 for ( j = 1; j <= n - i; j++) {
   string += " ";
 }

 for ( k = 0; k < 2 * i - 1; k++) {
   string+=count;
  
 }
 string+="\n";
}
console.log(string);

//2. Create a function to print pascals triangle – Function should accept one argument – number of lines.

n=6
a=[];

  for ( i = 0; i < n; i++) {
       row = [1];
     
      for ( j = 1; j < i; j++) {

          row.push(a[i-1][j-1] + a[i-1][j])
       
      }
     
      if( i > 0 ) row.push(1)
     
      a.push(row)
     
  }
  console.log(a);

//3.  Create a function which takes a single argument (no of lines) and prints the following triangle

n=7,num=1,k=n-1,string="";

for(d=1;d<=n;d++){

    num=d;
    for(c=1;c<=k;c++)
    string += " ";
       k--;
   
    for(c=1;c<=d;c++){

     string +=num;

        num++;        
    }
    num--;
    num--;
    for(c=1;c<d;c++)
    {
        string +=num;
        num--;
    }
    console.log(string);
   string="";
}

//4. Give an array, find the count of all the distinct elements in the array. 

a= [10, 3,5, 12, 5, 3, 9, 1]
a.sort();
 count = 1;
   results = "";
  for ( i = 0; i < a.length; i++)
  {
      if (a[i] == a[i+1])
      {
        count +=1;
      }
      else
      {
          results += a[i] + "-" + count + " \n" ;
          count=1;
      }
  }
console.log(results);
