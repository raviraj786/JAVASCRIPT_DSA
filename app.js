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



