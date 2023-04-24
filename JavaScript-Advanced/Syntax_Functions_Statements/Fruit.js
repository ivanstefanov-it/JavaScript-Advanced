function fruit(fruitType, weight, money){
    return `I need $${((weight / 1000) * money).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`
}

console.log(fruit('orange', 2500, 1.80));