function solve(a, b){
    let sorter = filter();
    return sorter[b](a);
    function filter(){
        return{
            asc: (s) => s.sort((a, b) => a-b),
            desc: (s) => s.sort((a, b) => b-a)
        }
    }
}