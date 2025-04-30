let no=370;
let temp=no;
let sum=0;

while(temp>0){
    let y=temp%10;
    sum+=y*y*y
    temp=parseInt(temp/10)
}

if(no==sum){
    console.log("tem",sum)
}else{
    console.log("no")
}