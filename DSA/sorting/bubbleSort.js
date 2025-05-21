let array1 = [10, 1, 2, 19, 11, 20];

for (let i = 0; i < array1.length; i++) {
  for (j = i; j < array1.length; j++) {
    if (array1[i] > array1[j]) {
      let temp = array1[i];
      array1[i] = array1[j];
      array1[j] = temp;
    }
  }
}

console.log("Sorted Array is :", array1);
