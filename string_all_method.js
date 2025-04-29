// toUpperCase()

let str="krishna";
str=str.toUpperCase()
console.log(str)

// toLowerCase()

let str1="KRISHNA";
str1=str1.toLowerCase()
console.log(str1)

// trim()==>word ke aage or piche ki sapce remove karta he

let str2="   krishna borad   "
console.log(str2.trim())

// slice==>slice word me se amuk word find karke deta for example hello me se hel chaiye

let str3="hello";
str3=str3.slice(0,3)
console.log(str3)

// concat==>do word ko jodne ka kam karta he

let a="krishna";
let b="Borad";
let ans=a.concat(b)
console.log(ans)

// replace==>for exmaple --hello..>help

let str4="hello";
str4=str4.replace("lo","p")
console.log(str4)

// charAt==>word hame find karna he ex:- hello==>o

let str5="hello";
str5=str5.charAt(3)
console.log(str5)