let x=prompt("enter x value:-");
let y=prompt("enter y value:-");
let z=prompt("enter z value:-");

if(x>y && x>z ){
    y>z?console.log(x+' '+y+" "+z):console.log(x+z+y)
}else if(y>x && y>z ){
    z>x?console.log(y+' '+z+" "+x):console.log(y+z+x)
}
else if(z>x && z>y ){
    x>y?console.log(z+' '+x+" "+y):console.log(z+y+x)
}else{
    console.log(x+y+z)
}