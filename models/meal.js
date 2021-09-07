/**
 * @class
 */
class Meals {
    /**
     * 
     * @param {string} id 
     * @param {string[]} categoryIds 
     * @param {string} title 
     * @param {string} affordability 
     * @param {string} complexity 
     * @param {string} imageUrl 
     * @param {number} duration 
     * @param {string[]} ingredients 
     * @param {string[]} steps 
     * @param {boolean} isGlutenFree 
     * @param {boolean} isVegan 
     * @param {boolean} isVegeterian 
     * @param {boolean} isLactoseFree 
     */
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegeterian, isLactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.duration = duration;
        this.imageUrl = imageUrl;
        this.isVegan = isVegan;
        this.isLactoseFree = isLactoseFree;
        this.isVegeterian = isVegeterian;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
    }
};

export default Meals;