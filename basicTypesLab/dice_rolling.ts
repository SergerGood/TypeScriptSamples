enum RolledValues {
    One,
    Five,
    Three,
    Twelve
}

let getRandom: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface IDice {
    height: string;
    width: string;
    borderWidth: string;
    color: string;
}

class Dice {
    protected div: Element;

    constructor(div: Element, settings: IDice) {
        this.div = div;

        let htmlElement = this.div as HTMLElement;
        htmlElement.style.height = settings.height;
        htmlElement.style.width = settings.width;
        htmlElement.style.borderWidth = settings.borderWidth;
        htmlElement.style.borderColor = settings.color;
        htmlElement.style.borderStyle = "solid";
    }

    changeText(rolledValue: number) {
        let htmlElement = this.div as HTMLElement;
        htmlElement.innerHTML = RolledValues[rolledValue];
    }
}

class DiсeRoller extends Dice {
    constructor(div: Element) {
        super(div, { height: "100px", width: "100px", borderWidth: "10px", color: "Black" });
    }
}

let elements: DiсeRoller[] = [];

for (let index: number = 0; index < 4; index++) {
    let element: Element = document.createElement("div");
    document.body.appendChild(element);

    let dice = new DiсeRoller(element);
    dice.changeText(getRandom(0, 3));

    elements.push(dice);
}

let buttonDices = document.createElement("button") as HTMLElement;
buttonDices.textContent = "Change";

buttonDices.onclick = (event) => {
    elements.map((element) => {
        element.changeText(getRandom(0, 3));
    })
};
document.body.appendChild(buttonDices);
