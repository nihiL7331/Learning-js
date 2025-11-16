function flatten(arr) {
  let flatArr = [];

  for(const subArr of arr) {
    Array.isArray(subArr) ? flatArr = flatArr.concat(flatten(subArr)) : flatArr.push(subArr);
  }

  return flatArr;
}


console.log(flatten([1, [2, 3], [4, [[[[[[[[5]]]]]]]]]]));

