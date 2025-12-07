// find  most max requcncyy char in string

function findMaxcountfreq(str) {
  let freq = {};
  let char = "";
  let maxcount = 0;
  // for(let letter of str){

  //     console.log(letter)
  // }

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1; //find count of leter

    //find max letter
    if (maxcount < freq[str[i]]) {
      maxcount = freq[str[i]];
      char = str[i];
    }
  }
  //  console.log(freq)
  // console.log(maxcount)
  return { maxcount, char, freq };
}

console.log(findMaxcountfreq("raviraj"));



// Given a non-empty sequence of characters s, return true if sequence is Binary, else return false.

function checkBinary(num){

  for(let d of num){
    if(d !== "1" && d !== "0"){
         return false
    }
  }

  return true
}

console.log(checkBinary("100"))
console.log(checkBinary("75"))
