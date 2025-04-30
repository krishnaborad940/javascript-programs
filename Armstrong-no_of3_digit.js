for(let no=100;no<=999;no++){
    let a=Math.floor(no/100);
    let b=Math.floor((no%100)/10)
    let c=no%10;
    
    let ans=(a**3)+(b**3)+(c**3)
    
    if(ans==no){
        
console.log("Armstrong NO:-",ans)
    }
}