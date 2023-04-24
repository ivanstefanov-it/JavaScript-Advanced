function sameNumbers(number){
    let numbers = number.toString().split('');
    let allAreSame = true;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (allAreSame) {
            allAreSame = numbers[i] === numbers[0];
        }
        sum = sum + Number(numbers[i]);
        
    }
    console.log(allAreSame);
    console.log(sum);
}

sameNumbers(2222222);