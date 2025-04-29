let x=prompt("enter x value:-");
let y=prompt("enter y value:-");
let z=prompt("enter z value:-");

if(x<0 && y>0 && z>0){
    console.log("sign is -")
}else if(x>0 && y>0 && z>0){
    console.log("sign is +")
}else if(x>0 && y<0 && z>0){
    console.log("sign is -")
}else if(x>0 && y>0 && z<0){
    console.log("sign is -")
}else{
    console.log("sign is -")
}