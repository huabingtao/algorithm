export default function quickSort(arr){
  __quickSort(arr,0,arr.length-1)  
  console.log('quickSort arr:',arr);
}

function __quickSort(arr, l, r){
  const p = __partition(arr,l,r)
  if(p>0){
    __quickSort(arr,l,p-1)
    __quickSort(arr,p+1,r)
  }
}

function __partition(arr,l,r){
  if(l>=r) return
  const v = arr[l]
  let j = l
  for(let i = l + 1;i<r;i++){
    if(arr[i] < v){
      __swap(j+1,i,arr)
      j++
    }
  }
  __swap(l,j,arr)
  return j
}

function __swap(a,b,arr){

  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}