let arr = [12, 87, 56, 65, 34, 29];

function BubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

let res = BubbleSort(arr);
console.log(res); // Output: [12, 29, 34, 56, 65, 87]
