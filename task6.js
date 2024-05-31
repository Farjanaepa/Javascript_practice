//  write a programme that will print sum of all the numbers that are divisable by 3 and 5 from 1-100


var i= 1;
var sum= 0;
while(i<=100){
    if(i%3==0 && i%5==0){
        document.write(" "+i +"<br>")
        sum=sum+i;
    }
    i=i+1;
}
document.write( " Total sum :"+sum);