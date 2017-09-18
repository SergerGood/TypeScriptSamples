namespace Advanced {
    let someArray = [1, "1", true];

    for (let element of someArray) {
        console.log(element);
    }

    for (let key in someArray) {
        console.log(key);//0, 1, 2
    }


}