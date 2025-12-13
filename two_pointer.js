// two pointer technique

// Two Pointer ek DSA approach hai jisme hum 2 pointers (indexes) use karte hain —
// usually array ya string par problems solve karne ke liye.

// 👉 Ek pointer start se
// 👉 Dusra pointer end se
// ya dono start se hi move karte hain

// Isse time complexity kam (O(n)) ho jati hai.

// Two Pointer kab use hoti hai?

// ✔ Array ya String ho
// ✔ Data sorted ho (zyada tar cases me)
// ✔ Pairs, subarray, palindrome jaise problems ho



// basic -----------------------
//------------ two sum me Hsahmap method
// has map data structure

//  array unsorted hota hai
// o(n) time chahiye


var towsum = function(nums , target){
  let map = new Map();
  console.log(map)

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        console.log(need , "ns")

        if (map.has(need)) {
            return [map.get(need), i];
        }

        map.set(nums[i], i);
    }
}

console.log(towsum([3,2,4] , 6))








// let left = 0;
// let right = Array.length - 2

// while(left < right){
//     left++
//     right--
// }

//------------------------







