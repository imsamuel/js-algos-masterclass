// Optimized version (previous bubblesort will iterate for as many elements
// there are - if array becomes sorted but there are still iterations left to
// be done, the array will keep getting scanned) So, can check if no swaps
// were made in the previous iteration, stop scanning the array for it is
// already sorted.

const bubbleSort = (nums) => {
  for (let end = nums.length - 1, hasSwapped; end > 0; end -= 1) {
    hasSwapped = false;
    for (let curr = 0; curr < end; curr += 1) {
      if (nums[curr] > nums[curr + 1]) {
        const temp = nums[curr];
        nums[curr] = nums[curr + 1];
        nums[curr + 1] = temp;
        hasSwapped = true;
      }
    }

    if (!hasSwapped) return;
  }
};
