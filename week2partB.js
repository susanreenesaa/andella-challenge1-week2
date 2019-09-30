//the issue is I want to change num to incrementing numbers
var squareArray=[];
var object2=[]
for(num=2; num<15; num++){    
var object ={
    // i want num(key):to be equal to num(value)
    2 :num*2
    
}
object[num]=object[2]
object2.push(object);
delete object[2];
object[num+1];

}

console.log( object2)

