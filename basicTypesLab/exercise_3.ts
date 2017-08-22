class colorChange3 {
    div: Element;

    constructor(div: Element) {
        this.div = div;
    }

    change(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

interface elementSet {
    "div": Element,
    "button": Element
}

enum Colors3 { Green, Red, Blue, Black }

class numericColor extends colorChange3 {
    static Colors = Colors3;

    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = squareSize3;
        (this.div as HTMLElement).style.height = squareSize3;        
    }
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

elementSets3.map((element, index) => {
    let colorChange = new colorChange3(element.div);

    (element.div as HTMLElement).style.width = squareSize3;
    (element.div as HTMLElement).style.height = squareSize3;

    element.button.textContent = "Change Color";
    (element.button as HTMLElement).onclick = (event) => {
        colorChange.change(Colors3[index]);
    }

    document.body.appendChild(element.div);
    document.body.appendChild(element.button);
});
