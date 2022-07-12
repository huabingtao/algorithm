/**
 * 时间复杂度： 平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)
 * 空间复杂度： O(1)
 * 稳定性：稳定
 * 数组中有 n 个数，比较每相邻两个数，如果前者大于后者，就把两个数交换位置；
 * 这样一来，第一轮就可以选出一个最大的数放在最后面；那么经过 n-1（数组的 length - 1） 轮，就完成了所有数的排序
 */

/**
 * 1.内层循环之间的数相互比较，如果j > j + 1则交换位置
 * 2.外层设置标识，如果内层循环没有需要交换的代表排序已经执行完毕，直接跳出循环
 * 
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 一轮排序下来最后一个放置的是最大值,下一轮只不需要对最后一位进行排序
    let done = true
    for (let j = 0; j < arr.length -i - 1; j++) {
      // 前后位置交换
      if(arr[j] > arr[j+1]){
        // var tem = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = tem;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        done = false
      }
    }
    if(done){
      break
    }
    // console.log("第"+i+"次排序"+arr)
  }
  console.log('bubbleSort arr:', arr);
}

export default bubbleSort