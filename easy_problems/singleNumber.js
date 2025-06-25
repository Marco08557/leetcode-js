var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let newArr = nums.filter((x) => x == nums[i]);

    if (newArr.length == 1) {
      return newArr[0];
    }
  }
};
