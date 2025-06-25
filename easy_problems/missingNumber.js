var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i <= nums.length; i++) {
    newArr.push(i);
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] != nums[j]) {
      return newArr[j];
    }
  }

  return newArr.length;
};
