let no=25;
let user=prompt("guess the no:-")

while(no>0){
    if(user==no){
        console.log("no is correct:-"+user)
    }else{
      let ans=  prompt("guess no:-")
        if(no==ans){
            console.log("no is correct:-"+ans)
            break;
        }
    }
}