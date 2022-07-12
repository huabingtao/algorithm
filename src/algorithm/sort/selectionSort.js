/**
 * 选择排序是一种简单直观的排序算法，无论什么数据进去都是O(n2) 的时间复杂度。所以用到它的时候，数据规模越小越好。
 * 唯一的好处可能就是不占用额外的内存空间了吧。通俗来说就是你们中间谁最小谁就出列，站到队列的最后边，
 * 然后继续对着剩余的无序数组说你们中间谁最小谁就出列，站到队列的最后边，一直到最后一个，继续站到最后边，这样数组就有了顺序，从小到大。
 */

/**
 * 算法步骤
 * 选择排序  O(n2) 
 * 1.在未排序序列中找到最小元素，存放到排序序列的起始位置 定义最小值索引 mainIndex 
 * 2.从当前循环索引向后比较，若后面还有值比i要小则把索引存放在mainIndex中
 * 3.把 mainIndex 与 i 位置换位
 * 4.重复1-3
 */


// 算法实现
function selectionSort (arr) {
  for(let i=0;i<arr.length;i++){
    // 存放最小值索引
    let minIndex = i
    for(let j= i + 1; j< arr.length; j++){
      // 若后面还有值比i要小则把索引存放在mainIndex中
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    // 把 mainIndex 与 i 位置换位
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  console.log('selection arr:',arr)
}

export default selectionSort