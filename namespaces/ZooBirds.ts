/// <reference path="ZooAnimals.ts" />
namespace Zoo {
    export class Bird implements Animals {
        skinType = "feather";
        isMammal() {
            return false;
        }
    }
}