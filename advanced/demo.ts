namespace Advanced {
    let someArray = [1, "1", true];

    for (let element of someArray) {
        console.log(element);
    }

    for (let key in someArray) {
        console.log(key);//0, 1, 2
    }

    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") { }
        if (typeof padding === "string") { }
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
    //pet.fly(); ERROR
}