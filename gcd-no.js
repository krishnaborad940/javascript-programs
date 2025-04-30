


let n1=336;
let n2=360;
let gcd;

while(n1!=n2){
    if(n1>n2){
        n1=n1-n2;
    }else{
        n2=n2-n1;
    }
    gcd=n1;
}
console.log(gcd)