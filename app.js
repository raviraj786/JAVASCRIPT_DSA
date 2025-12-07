let prompt = require("prompt-sync")();

let n = prompt("Enter a number ");

// for (let i = 1; i < a; i++) {
//   for (let j = 1; j < a; j++) {
//     process.stdout.write("*");
//   }
// console.log()
// }


//write trangle 

for(let i =1 ; i<=n ; i++){
    for(let j=1 ; j <=i; j++ ){
        process.stdout.write(j+" ")
    }
    console.log()
}


////////////////////////////////////////

// palidrome



let = "madam"
let i = 0;
let j= n.length-1;
let palid = true

while(i<j){
    if(l.charAt(i) != l.charAt(j)){
        palid=false;
        break
    }
    i++
    j--
}

if(palid){
    console.log("p")
}else{
    console.log("n")
}








