var moveZeroes = function (nums) {
  let numZero = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      numZero++;
    }
  }

  for (let j = 1; j <= numZero; j++) {
    nums.push(0);
  }
};
