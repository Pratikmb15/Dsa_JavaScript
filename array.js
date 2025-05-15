let arr = [58, 45, 66, 72, 91, 66, 45];

//Insert an element at specific position
function insertAt(pos){
    arr.splice(pos-1,0,14)
}
insertAt(3);
console.log(arr);//[ 58, 45, 14, 66, 72, 91, 66, 45]

//remove element from array from specific position
function removeItemFrom(pos){

    arr.splice(pos,1);
}
removeItemFrom(2);
console.log(arr);//[ 58, 45, 66, 72, 91, 66, 45 ]

function findDuplicates(){

    let duplicates=[];
    //Find duplicates
    for(let i in arr){
        for(let j in arr){
            if(i!==j && arr[i]===arr[j] && !duplicates.includes(arr[i])){
                duplicates.push(arr[i]);
            }
        }
    }
    console.log(`Duplicates : ${duplicates}`);//Duplicates : 45,66
    return duplicates;
}
findDuplicates();

//remove duplicates

function removeDuplicate(){
    let dups = findDuplicates();
    for(let i in arr){
        if(dups.includes(arr[i])){
            let index= arr.lastIndexOf(arr[i]);
            arr.splice(index,1);
        }
    }
}

console.log(arr);//[ 58, 45, 66, 72, 91 ]

//Search index an element in array
function searchElementIndex(val){

   
    for(let a in arr){
        if(arr[a]==val){
            console.log(arr.indexOf(arr[a]));//3
            return arr.indexOf(arr[a]);
        }
        return -1;
    }
}
searchElementIndex(72);
console.log(arr.indexOf(72));

//append two arrays
let arr2=[33,77];
let resAppendedArr = arr.concat(arr2);
console.log(resAppendedArr);//[ 58, 45, 66, 72, 91, 33, 77 ]

//find max element in array
function findMax(){
let max=0
    for(let x in arr){
    if(arr[x]>max){
        max=arr[x];
    }
    }
    console.log(`max element is : ${max}`);
    return max;
}

findMax();