class HashTable{
    constructor(){
        this.table={}
    }

    add(key,val){
        if(this.table.hasOwnProperty(key)){
            console.log(`Key ${Key} already exists in Hashtable`);
        }
        else{
            this.table[key]=val;
            console.log(`Added ${key} : ${val}`);
        }
    }
    get(key){
        if(this.table.hasOwnProperty(key)){
            console.log(`Value at "${key}" is ${this.table[key]}`);
            return this.table[key];
        }
        else{
            console.log(`Key ${key} not found`);
            return null;
        }
    }
    update(key,val){
        if(this.table.hasOwnProperty(key)){
            this.table[key]=val;
            console.log(`Updated Key ${key} : ${val}`);
        }
        else{
            console.log(`Key ${key} not found`);
        }
    }
    remove(key){
        if(this.table.hasOwnProperty(key)){
            delete this.table[key];
            console.log(`Deleted key "${key}"`);
        }
        else{
            console.log(`Key "${key}" not found.`);
        }
    }
     // ✅ DISPLAY all key-value pairs
     display() {
        console.log("Current Hashtable:");
        console.log(this.table);
    }
}
let ht=new HashTable();
ht.add('Pratik',35000);//Added Pratik : 35000
ht.add('Sanya',40000);//Added Sanya : 40000
ht.update('Pratik',35550);//Updated Key Pratik : 35550
ht.display();//Current Hashtable:
             //{ Pratik: 35550, Sanya: 40000 }
console.log(ht.get('Sanya'));//Value at "Sanya" is 40000
//40000