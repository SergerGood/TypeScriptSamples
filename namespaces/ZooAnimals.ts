namespace Zoo {
    export interface Animals {
        skinType: string;
        isMammal(): boolean;
    }

    export let someVaribale: string = "asd";

    export function someFunction() {

    }

    export namespace InternalZoo {
        export let internalVariable: string = "asd";
    }
}