function solve(...data){
    const obj = {};
    
   data.forEach(el => {
       const argType = typeof el;
       console.log(`${argType}: ${el}`);

       if (!obj.hasOwnProperty(argType)) {
           obj[argType] = 0;
       }
       obj[argType]++;
   });
  Object.entries(obj)
    .sort((a, b) => {
        const [aKey, aValue] = a;
        const [bKey, bValue] = b;

    return bValue - aValue;
   }).forEach((el) =>{
       const [type, value] = el;
       console.log(`${type} = ${value}`);
   });
}