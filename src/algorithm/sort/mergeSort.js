export default function mergeSort(arr) {
  const res = __mergeSort(arr)
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