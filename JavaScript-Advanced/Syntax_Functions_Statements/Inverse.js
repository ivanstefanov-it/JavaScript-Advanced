function aggregate(arr, func){
    return func(arr);
}

function inverseSum(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        const element = 1 / arr[i];
        result += element;
    }
    return result;
}

console.log(aggregate([1,2,4], inverseSum));