const add = (function result(){
    let sum = 0;

    function add(addend){
        sum += addend;

        return add;
    }
    
    add.toString = function(){
        return sum;
    }

    return add;
})()