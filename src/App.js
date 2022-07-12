
import './App.css';
import { generateRandomArray, generateNearlyRandomArray, testSort } from './testHelper'
import selectionSort from './algorithm/sort/selectionSort'
import insertionSort from './algorithm/sort/insertionSort';
import bubbleSort from './algorithm/sort/bubbleSort';

function App() {

  const arr = generateRandomArray(10000,1,10000)
  // const arr2 = generateRandomArray(10000,0,3)
  const arr2 = generateNearlyRandomArray(10000,100)
  var arr3 = generateRandomArray(1000,1,1000)
  // var arr3 = [29,23,100,9,7,49,36,57];
  // console.log('原始数据:',arr3);
  // // console.log('arr:',arr);
  // // selectionSort(arr)
  testSort('selectionSort',selectionSort,arr)
  testSort('insertionSort',insertionSort,arr2)
  testSort('bubbleSort',bubbleSort,arr3)
  return (
    <div className="App">
    </div>
  );
}

export default App;
