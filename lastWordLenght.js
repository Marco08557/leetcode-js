var lengthOfLastWord = function(s) {
    const arr = s.trim().split(/\s+/)
    const finalWord = arr.length -1;

    return arr[finalWord].length

};

