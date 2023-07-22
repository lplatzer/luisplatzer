/*
* @params: type of data being requested
*/
import {CoffeeNames} from "../coffeeData";

export async function getPagePaths(pathType: string) {
    if(pathType === "coffeePaths") {
        return CoffeeNames;
    }
}