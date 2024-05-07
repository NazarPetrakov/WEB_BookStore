var n = parseInt(prompt("Введіть кількість елементів масиву:"));

var array = [];
for (var i = 0; i < n; i++) {
  array.push(Math.floor(Math.random() * 100));
}

var min = Math.min(...array);

var minIndex = array.indexOf(min);

for (var j = minIndex; j > 0; j--) {
  array[j] = array[j - 1];
}
array[0] = min;

var sortedArray = array.slice();

function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var maxIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}

selectionSort(sortedArray);

var outputDiv = document.getElementById("output");
var inputArrayDiv = document.createElement("div");
inputArrayDiv.textContent = "Вхідний масив: " + array.join(", ");
outputDiv.appendChild(inputArrayDiv);

var sortedArrayDiv = document.createElement("div");
sortedArrayDiv.textContent = "Відсортований масив: " + sortedArray.join(", ");
outputDiv.appendChild(sortedArrayDiv);
