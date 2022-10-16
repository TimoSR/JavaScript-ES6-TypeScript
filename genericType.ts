interface MyType {
    id: number; // id is available
    id2: number;
}
interface AnotherType {
    id: number; // id is available
}
function genericFunction<T extends AnotherType>(p1: T): void {  
// Any type that has all fields from AnotherType
    console.log("Inside generic:" + p1.id);
}

genericFunction({ id: 123, id2: 99999 }); // This is legit because we have id (and more)

