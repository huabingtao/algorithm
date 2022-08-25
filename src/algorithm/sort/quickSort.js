/**
 * 快速排序
 * 
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
  if(l >= r) return
  const v = arr[l] // 设置第一个元素为基准点 v
  let j = l // 设置中间位置j
  for(let i = l + 1; i <= r; i++){
    if(arr[i] < v){ // 如果当前考察的元素比基准点小
      __swap(j+1,i,arr) // 则把基准点后一位的元素同当前考察的元素交换位置
      j++ // 基准点往后移动一位
    }
  }
  if(l === j) return j // 如果基准点不变则跳过本次交换
  __swap(l,j,arr) // 把基准点值v交换到应该属于它的地方j
  return j //返回基准点j
}

function __swap(a,b,arr){
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

