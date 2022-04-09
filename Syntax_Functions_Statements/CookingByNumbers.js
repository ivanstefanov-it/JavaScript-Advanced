// chop - divide the number by two
// dice - square root of number
// spice - add 1 to number
// bake - multiply number by 3
// fillet - subtract 20% from number

function cooking(params){

    let number =parseInt(params[0]);

    let functions = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => 0.8 * x
    }
    for (let i = 1; i < params.length; i++) {
        number = functions[params[i]](number);
        console.log(number);
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop',])