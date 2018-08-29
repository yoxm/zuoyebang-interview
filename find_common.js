let a1 = [1, 2, 3, 4];
let a2 = [3, 2, 4, 4, 2, 5];
let as1 = new Set(a1);
let as2 = new Set(a2);

let union = new Set([...as1, ...as2]);
let common = new Set([...as1].filter(x => as2.has(x)));
let diff1 = new Set([...as1].filter(x => !as2.has(x)));
let diff2 = new Set([...as2].filter(x => !as1.has(x)));
console.log(Array.from(union));
console.log(Array.from(common));
console.log(Array.from([...diff1, ...diff2]));
