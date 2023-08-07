import {CoffeeData, CoffeeRecipes} from "../coffeeData";

/**
* @param {string} id - id of the Coffee to find; if no id is passed, an array containing all data is returned.
*/
export async function getCoffeeData(id?: string) {
    if (id) {
        const data = CoffeeData.find(elem => elem.id === `coffees:${id.replace("-", "_")}`);
        const recipes = CoffeeRecipes.find(elem => elem.id === `recipes:${id.replace("-", "_")}`);
        return {
            ...data,
            ...recipes,
        }
    } else {
        const data = CoffeeData;
        const recipes = CoffeeRecipes;

        return {
            ...data,
            ...recipes,
        }
    }
    // TODO: replace this with properly filter query once db is being used

}
