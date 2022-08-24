/**
 * 
 * 分”就是将原始数组逐次二分，直到每个数组只剩一个元素，一个元素的数组自然是有序的
 * 所以就可以开始“治”的过程了。
 * 时间复杂度分析：分的过程需要三步：log8 = 3，而每一步都需要遍历一次8个元素，所以8个元素共需要运行 8log8次指令，那么对于 n 个元素，时间复杂度为 O(nlogn)。
 * “治”实际上是将已经有序的数组合并为更大的有序数组。那怎么做呢?就是创建一个新数组，比较left[0]和right[0] ，那个比较小就将那个的值放进新数组，
 * 然后再继续比较left[0]和right[1]，或者是left[1]和right[0]。可以看出数组left，right都只需遍历一遍，所以对两个有序数组的排序的时间复杂度为O(n)。
 * 
 */
export default function mergeSort(arr) {
  const res = __mergeSort(arr)
  console.log('mergeSort arr',res);
  return res
}

function __mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return __merge(__mergeSort(left), __mergeSort(right))
}

function __merge(left, right) {
  let res = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
  }

  if (left.length) {
    res = [...res, ...left]
    left = []
  }
  if (right.length) {
    res = [...res, ...right]
    right = []
  }

  return res
}