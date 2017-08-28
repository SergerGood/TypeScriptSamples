/// <reference path="ZooAnimals.ts" />

namespace Zoo {
    export class Reptile implements Animals {
        skinType = "scales";
        isMammal() {
            return false;
        }
    }
}