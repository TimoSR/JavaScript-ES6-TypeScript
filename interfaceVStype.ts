interface MyStringDictionary {
    [key: number]: string; // Only string is accepted for each number (identifier)
}

const dict2: MyStringDictionary = {[1]: "one"};
const dict3: MyStringDictionary = {[1]: "one", [2]: "two", [3]: "three"};





const car = {
        type: "Fiat", 
    model:"500",
    
    
    color:"white"

};
 

let {type: a, model: b, color: c} = car;

enum Options {
    ONE = 'one',
    TWO = 'two',
    THREE = 'three',
}


let directionInNumber = Options.ONE; 

console.log(directionInNumber);

interface MyStringDictionary {
    [key in Options]: string; // Only string is accepted for each number (identifier)
}

const dict1: MyStringDictionary = {1: 'hello'}


