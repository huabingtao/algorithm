function generateRandomArray(n,l,r){
  const arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random()* r + l)    
  }
  return arr
}

function generateNearlyRandomArray(n,swap){
  const arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i  
  }
  for(let j = 0; j< swap;j++){
    let zValue = null
    let x = Math.floor(Math.random()* n + 1)
    let xValue = arr[x]
    let y = Math.floor(Math.random()* n + 1)
    let yValue = arr[y]
    zValue = xValue
    xValue = yValue
    yValue = zValue
    arr[x] = xValue
    arr[y] = yValue
    // arr[Math.floor(Math.random()* n + 1),Math.floor(Math.random()* n + 1)] = arr[Math.floor(Math.random()* n + 1),Math.floor(Math.random()* n + 1) ]
  }
  return arr
}

function testSort(fncName,fnc,arr){
  const startTime = new Date().getTime()
  fnc(arr)
  const endTime = new Date().getTime()
  console.log(`${fncName}:消耗了 ${(endTime-startTime)/1000}s`)
}

export {
  generateRandomArray,
  generateNearlyRandomArray,
  testSort
}