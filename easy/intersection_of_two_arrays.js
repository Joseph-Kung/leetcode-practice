var intersection = function (nums1, nums2) {
  return [...new Set(nums2)].filter(el => nums1.includes(el));
};