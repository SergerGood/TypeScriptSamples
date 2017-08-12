let x: number = 5;
const pi  = 3.14;
let isAny: boolean = true;

let someArray = Array<number>(1, 2, 3);
let someArray1: number[] = [1, 2, 3];
let sum = (item) => {return item + 1}

someArray.map((x) => {
    alert(x);
});

let firstName: string = `First Name`;
let age: number = 10;
let message = `hello ${ firstName }: ${age}`;

let tuple: [number, string] = [10, "10"];

enum Color { Red = 2, Green = 4};
let color: Color.Green;

let list: any[] = [1, "2"];
list[1] = 2;

function emty(): void{
    alert("tatata");
}


let someValue: any = "some value text";
let stringLength1: number = (<string>someValue).length;
let stringLength2: number = (someValue as string).length;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface LabeledValue{
    label: string;
    toolTip?: string;
    readonly id: number;
    [property: string]: any;
}

function printLabel(labeledObject: LabeledValue): { label: string; }{
    
    if (labeledObject.toolTip){
        console.log(labeledObject.toolTip);
    }

    return {label: labeledObject.label};
}

let myObj = {size : 0, label: "text", id: 1};
printLabel(myObj);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let array: number[] = [1, 2, 3];
let readonlyArray: ReadonlyArray<number> = array;
//readonlyArray[0] = 1;
//array = readonlyArray;
array = readonlyArray as number[];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface IClock{
    currentTime: Date;
    setTime(time: Date);
}

class Clock implements IClock{
    currentTime: Date;
    setTime(time: Date) {
        this.currentTime = time;
    }
    
    constructor(time: Date){
        this.currentTime = time;
    }
}

///////////////////////////////////////////
interface ClockInterface{
    tick();
}

interface ClockConstructor{
    new (hour: number, minute: number): ClockInterface;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface{
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface{
    constructor(h: number, m: number){
    }

    tick() {
        console.log("tick");
    }
}

let digital = createClock(DigitalClock, 11, 12);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface searchFunc{
    (source: string, subString: string): boolean;
}

let mySearch: searchFunc = function(src, sub){
    let result = src.search(sub);
    return result > -1;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface stringArray{
    readonly [index: number]: string;
}

let myStringArray: stringArray = ["1", "2"];
let myString: string = myStringArray[0];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Animal{
    private _name: string;
    protected age: number;
    static legsCount = 4;

    protected constructor(name: string){
        this._name = name;
    }

    move(distanceInMeters: number){
        return `${this._name} moved ${distanceInMeters} m.`;
    }

    get name(){
        return this._name;
    }

    set name(newName: string){
        this._name = newName;
    }
}

class Rhino extends Animal{
    readonly height: number = 100;

    constructor() {
        super("Rhino");
    }

    getAge(){
        return this.age;
    }
}

let legsCount = Animal.legsCount;

// let animal = new Animal("?");
let animal = new Rhino();
animal.getAge();
animal.name = "!";