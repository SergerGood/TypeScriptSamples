/// <reference path="extendedNamespacesLab_part2.ts"/>

namespace ExtendedArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    }

    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
}