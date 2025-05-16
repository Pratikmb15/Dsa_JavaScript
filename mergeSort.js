let arr = [87, 65, 34, 78, 84, 11];

function MergeSort(myArr) {
    if (myArr.length == 1) {
        return myArr
    }
    let mid = Math.floor(myArr.length / 2); 

    let left = MergeSort(myArr.slice(0, mid));
    let right = MergeSort(myArr.slice(mid , arr.length));

    return Merge(left, right);

}
function Merge(first, second) {
    const mix = [];

    let i = 0;
    let j = 0;

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix.push(first[i]);
            i++
        } else {
            mix.push(second[j]);
            j++
        }
    }
    while (i < first.length) {
        mix.push(first[i]);
        i++;
    }
    while (j < second.length) {
        mix.push(second[j]);
        j++;
    }
    return mix;


}
arr=MergeSort(arr);
console.log(arr);