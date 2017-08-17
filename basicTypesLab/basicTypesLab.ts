class colorChange{
    div: Element;

    constructor(div: Element){
        this.div = div;
    }

    change(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

let usedColor: string = "green";
let squareSizeNumber: number = 100;
let squareSize: string = `${ squareSizeNumber }px`;

let button: Element = document.createElement("button");
button.textContent = "Change Color";
document.body.appendChild(button);

let div: Element = document.createElement("div");
document.body.appendChild(div);

(div as HTMLElement).style.height = squareSize;
(div as HTMLElement).style.width = squareSize;

let colorChange: Function = (element: Element, color: string): boolean => {
    (<HTMLElement>element).style.backgroundColor = color;
    return true; 
}

(button as HTMLElement).onclick = () => {
    colorChange(div, usedColor);
}