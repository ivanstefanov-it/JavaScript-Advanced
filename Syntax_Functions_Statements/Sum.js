function aggregate(arr, func){
    return func(arr);
}

function sum(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        result += element;
    }
    return result;
}

console.log(aggregate([1,4,7], sum));