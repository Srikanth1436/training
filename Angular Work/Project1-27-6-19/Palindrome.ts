var num:number=121;
var rev:number=0;
var temp:number=num;
while(num>0)
{
    var last=num%10;
    rev=Math.floor(rev*10+last);
    num=Math.floor(num/10);
    //return rev;
}
console.log(rev);
if(temp==rev)
    console.log("palindrome");
else
    console.log("not palindrome");