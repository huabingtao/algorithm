/**
 * 快速排序
 * 解析：找一个基准点，通过操作使得数列的左边全部都是小于他的数，右边全部都是大于他的数返回返回基准点继续对两侧的数组进行递归直至全部有序
 * 假设一组数据为 arr:[29, 23, 100, 9, 7, 49, 36, 57]
 * 1. 首先拿出数据中的第一位作为基准点 v:arr[0] 初始化设置基准点初始位置 j:l 
 * 2. 遍历基准点后面的元素，如果 v<arr[i] 则把基准点后一位的元素同当前考察的元素交换位置 j++ 基准点往后移动一位（这里的用意是把小于基准点的值都放在基准点左边）
 * 3. __swap(l,j,arr) 把基准点值v交换到应该属于它的地方j
 * 4. 返回基准点 j 
 * 5. 根据 j 再把arr分割成两个数组传入 __quickSort(arr,l, p-1) __quickSort(arr,p+1,r)
 * 6. 重复1-5 直到数据成为有序数组
 */

/**
 * 假设数据为 [29,23,100,9,7,49,36,57]
 * 第一轮 __partition的演示步骤
 * 
 * 原始数据 arr: (8) [29, 23, 100, 9, 7, 49, 36, 57]  
  数据最左边开始索引 l: 0
  数据结束索引 r: 7
  基准值索引 j: 0
  基准值 v: 29
  for(let i = l + 1; i <= r; i++) 循环：
  第一轮:
    i:1
    j:1
    arr[i]: 23 
    arr [29, 23, 100, 9, 7, 49, 36, 57]
  第二轮:
    i:2
    j:1
    arr[i]: 100
    arr: [29, 23, 100, 9, 7, 49, 36, 57] 
  第三轮:
    i:3
    arr[i]: 9
    j:2
    arr: [29, 23, 9, 100, 7, 49, 36, 57]    
  第四轮:
    i:4
    arr[i]: 7
    j:3
    arr: [29, 23, 9, 7, 100, 49, 36, 57]    
  第五轮:
    i:5
    arr[i]: 49
    j:3
    arr: [29, 23, 9, 7, 100, 49, 36, 57]    
  第六轮:
    i:6
    arr[i]: 36
    j:3
    arr: [29, 23, 9, 7, 100, 49, 36, 57]    
  第七轮:
    i:7
    arr[i]: 57
    j:3
    arr: [29, 23, 9, 7, 100, 49, 36, 57]      
  * 返回 j:3 
 */

export default function quickSort(arr){
  // debugger
  __quickSort(arr,0,arr.length-1)  
  console.log('arr:',arr);
}

function __quickSort(arr, l, r){
  if( l>=r ) return 
  const p = __partition(arr,l,r)  
  __quickSort(arr,l,p-1)
  __quickSort(arr,p+1,r)  
}

function __partition(arr,l,r){
  if(l >= r) return // 遍历到最后一位
  const v = arr[l] // 设置第一个元素为基准点 v
  let j = l // 设置基准点初始位置 j
  for(let i = l + 1; i <= r; i++){
    if(arr[i] < v){ // 如果当前考察的元素比基准点小
      __swap(j+1,i,arr) // 则把基准点后一位的元素同当前考察的元素交换位置
      j++ // 基准点往后移动一位
    }
  }
  __swap(l,j,arr) // 把基准点值v交换到应该属于它的地方j
  return j //返回基准点j
}

function __swap(a,b,arr){
  if(a === b) return
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
 
// function __partition(arr,low,high){
//     var i = low,j = high,pivot = arr[i];
     
//     while(i < j ){
//         //从右往左找
//         while(i < j && arr[j] > pivot )
//             j--;                       
//         if(i < j ){
//           __swap(i++,j,arr);
//         }
         
//         //从左往右找
//         while(i < j && arr[i] <= pivot)
//             i++;
//         if(i < j ){
//           __swap(i,j--,arr);
//         }
//     }
 
//     return i;  //返回基准元素位置
// }
 
// function __swap(a,b,arr){
//     console.log(a,b,arr[a],arr[b])
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// function __quickSort(arr,low,high){
//   var mid;
//   if(low < high){
//       mid = __partition(arr,low,high); //返回基准元素位置
//       __quickSort(arr,low,mid-1);   //左边快速排序
//       __quickSort(arr,mid+1,high);  //右边快速排序
//   }
// }
 
// export default function quickSort(arr){
//   __quickSort(arr,0,arr.length-1)
//   console.log("quickSort arr", arr);
// }

