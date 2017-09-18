namespace Advanced {
    let someArray = [1, "1", true];

    for (let element of someArray) {
        console.log(element);
    }

    for (let key in someArray) {
        console.log(key);//0, 1, 2
    }

    function padLeft(value: string, padding: string | number) {
        if (isNumber(padding)) { }
        if (typeof padding === "string") { }
    }

    function isNumber(x: any): x is number {
        return typeof x === "number";
    }

    interface Bird {
        fly();
        layEggs();
    }

    interface Fish {
        swim();
        layEggs();
    }

    function getSmallPet(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet();
    pet.layEggs();

    if ((<Bird>pet).fly) {
        (<Bird>pet).fly();
    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }
}