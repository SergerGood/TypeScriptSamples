class colorChange3 {
    div: Element;

    constructor(div: Element) {
        this.div = div;
    }

    change(color: string | number): boolean {
        if (typeof(color) === "number"){
            return true;
        }

        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

enum Colors3 { Green, Red, Blue, Black }

class numericColor extends colorChange3 {
    static Colors3 = Colors3;

    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = squareSize3;
        (this.div as HTMLElement).style.height = squareSize3;        
    }

    change(color: number): boolean {
        (this.div as HTMLElement).style.backgroundColor = Colors3[color];
        return true;
    }
}

interface elementSet {
    "div": Element,
    "button": Element
}

let squareSizeNumber3: number = 100;
let squareSize3: string = `${squareSizeNumber3}px`;
let elementSets3: Array<elementSet> = [];

for (let index: number = 0; index < 4; index++) {
    elementSets3.push({
        "div": document.createElement("div"),
        "button": document.createElement("button")
    });
}

let getRandomInt: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

elementSets3.map((element, index) => {
    let colorChange = new numericColor(element.div);

    (element.div as HTMLElement).style.width = squareSize3;
    (element.div as HTMLElement).style.height = squareSize3;

    element.button.textContent = "Change Color";
    (element.button as HTMLElement).onclick = (event) => {
        let color = getRandomInt(0, 3);
        colorChange.change(color);
    }

    document.body.appendChild(element.div);
    document.body.appendChild(element.button);
});
