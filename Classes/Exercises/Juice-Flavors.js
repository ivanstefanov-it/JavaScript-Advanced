function solution(inputArr = []) {
    let result = {};
    let storage = {};

    for (const info of inputArr) {
        let [fruit, value] = info.split(' => ');
        value = Number(value);

        if (!storage[fruit]) {
            storage[fruit] = value;
        } else {
            storage[fruit] += value;
        }

        let currentFruitValue = storage[fruit];
        if (currentFruitValue >= 1000) {
            let bottles = Math.trunc(currentFruitValue / 1000);
            result[fruit] = bottles;
        }
    }

    Object.entries(result).forEach(([fruit, bottles]) => {
        console.log(`${fruit} => ${bottles}`);
    });
}