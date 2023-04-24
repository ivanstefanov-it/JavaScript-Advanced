function inventory(data){
    return JSON.stringify(data.reduce((acc, heroString, i, arr) => {
        let [heroName, level, items] = heroString.split(' / '); 
        acc.push({name: heroName, level, items: items.split(',').map(x => x.trim)})

        return[acc]
    }, []));
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));