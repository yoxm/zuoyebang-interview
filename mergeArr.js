function mergeArray(arr1, arr2) {
  var ind1 = 0; //标记arr1的对比元素的初始索引值
  var ind2 = 0; //标记arr2的对比元素的初始索引值
  var arr = []; //作为输出的新数组
  while (ind1 < arr1.length && ind2 < arr2.length) {
    //当arr1和arr2元素均未全部存入arr中，则从第一个元素开始进行比较，将较小的那个元素存入arr
    if (arr1[ind1] <= arr2[ind2]) {
      arr.push(arr1.slice(ind1, ind1 + 1)[0]); //若arr1的对比元素小于arr2的对比元素，则将arr1的对比元素存入arr中
      ind1++;
    } else {
      arr.push(arr2.slice(ind2, ind2 + 1)[0]);
      ind2++;
    }
  }
  while (ind1 < arr1.length) {
    //当arr2的元素已全部存入arr中，则直接将arr1剩余的所有元素依次存入arr
    arr.push(arr1.slice(ind1, ind1 + 1)[0]);
    ind1++;
  }
  while (ind2 < arr2.length) {
    //当arr1的元素已全部存入arr中,则直接将arr2剩余的所有元素依次存入arr
    arr.push(arr2.slice(ind2, ind2 + 1)[0]);
    ind2++;
  }
  return arr;
}

console.log(mergeArray([1, 2, 3], [2, 4, 5]));

/**
 * @param {Array[]} arrs
 * @param {boolean=false} [isUnique]
 * @param {Function=(a, b) => a - b} [compare]
 * @returns {Array}
 */
function join(arrs, isUnique = false, compare = (a, b) => a - b) {
  if (!Array.isArray(arrs)) {
    return [];
  }

  let result = [];

  arrs.map(arr1 => {
    arr1 = Array.isArray(arr1) ? arr1.slice() : Array.from(arr1);
    let arr2 = result;
    result = [];

    while (arr1.length > 0 && arr2.length > 0) {
      result.push(compare(arr1[0], arr2[0]) <= 0 ? arr1.shift() : arr2.shift());
    }

    result = result.concat(arr1, arr2);

    if (isUnique) {
      result = Array.from(new Set(result));
    }
  });

  return result;
}

console.log(join(arrs)); // [ -1, 0, 1, 2, 3, 4, 4, 5 ]
console.log(join(arrs, true)); // [ -1, 0, 1, 2, 3, 4, 5 ]
