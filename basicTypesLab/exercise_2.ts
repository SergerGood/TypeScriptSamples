class colorChange2{
    div: Element;

    constructor(div: Element){
        this.div = div;
    }

    change(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

interface elementSet{
    "div": Element,
    "button": Element
}

enum Colors{ Green, Red, Blue, Black }

let squareSizeNumber2: number = 100;
let squareSize2: string = `${ squareSizeNumber2 }px`;
let elementSets: Array<elementSet> = [];
let Elements = {
    "div": document.createElement("div"),
    "button": document.createElement("button")
}

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        "div": document.createElement("div"),
        "button": document.createElement("button")
    });    
}

elementSets.map((element, index) => {
    let colorChange = new colorChange2(element.div);
    
    (element.div as HTMLElement).style.width = squareSize2;
    (element.div as HTMLElement).style.height = squareSize2;
    
    element.button.textContent = "Change Color";
    (element.button as HTMLElement).onclick = (event) =>{
        colorChange.change(Colors[index]);
    }
    
    document.body.appendChild(element.div);
    document.body.appendChild(element.button);
});
    