function calorieObject(macros){
let result = {};

    for (let i = 0; i < macros.length; i += 2) {
        result[macros[i]] = parseInt(macros[i + 1]);
    }

    return result;
}

console.log(calorieObject());