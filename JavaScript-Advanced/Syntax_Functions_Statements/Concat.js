function aggregate(arr, func){
    return func(arr);
}

function Concat(arr){
    let result = '';
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        result += element;
    }
    return result;
}

console.log(aggregate([1,4,2], Concat));