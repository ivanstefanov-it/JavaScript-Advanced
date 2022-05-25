function juiceFactory(data) {
    let parsedData = {};
    let juice = {};

    for (let i = 0; i < data.length; i++) {
        let tempParsedJuice = data[i].split(' => ');
            if (parsedData[tempParsedJuice[0]]) {
                parsedData[tempParsedJuice[0]] = parsedData[tempParsedJuice[0]] +  Number(tempParsedJuice[1]);
            }else{
                parsedData[tempParsedJuice[0]] = Number(tempParsedJuice[1]);
            }
            let bottles = Math.floor(parsedData[tempParsedJuice[0]] / 1000);
            if(bottles > 0){
                juice[tempParsedJuice[0]] = bottles;
            }
            
    }
    let finalParsedData = Object.entries(juice);

    for (let i = 0; i < finalParsedData.length; i++) {
        console.log(finalParsedData[i].join(' => '));
    }
}

console.log(juiceFactory(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
))