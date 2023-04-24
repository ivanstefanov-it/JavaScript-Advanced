class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    validate(index){
        if (this.list[index] === undefined) {
            throw new Error();
        }
    }
    add(element){
        this.list.unshift(element);
        this.size++;
        this.list.sort((x, y) => x - y);
    } 
    remove(index){
        this.validate(index);
        this.list.splice(index, 1);
        this.size--;
        this.list.sort((x, y) => x - y);
    }
    get(index){
        this.validate(index);
        return this.list[index];
    }
}