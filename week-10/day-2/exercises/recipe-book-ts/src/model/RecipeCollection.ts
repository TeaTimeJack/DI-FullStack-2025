
import {RecipeItem} from './RecipeItem'

export class RecipeCollection {
    
    public recipesList:RecipeItem[]

    constructor() {
        this.recipesList = []
    }

   public addNewRecipe(recipeItem:RecipeItem){
        this.recipesList.push(recipeItem)
    }

    public removeRecipe(recipeID:string){
        const recipeIndex = this.recipesList.findIndex(item => item.id === recipeID);
        if(recipeIndex === -1){
            console.log("This ID isnt found");
            return
        } 
        this.recipesList.splice(recipeIndex,1)
    }

    public toggleRecipeFav(recipeID:string){
        const recipeIndex = this.recipesList.findIndex(item => item.id === recipeID);
        if(recipeIndex === -1){
            console.log("This ID isnt found");
            return
        } 
        this.recipesList[recipeIndex].isFavorite=!this.recipesList[recipeIndex].isFavorite
    }

    public saveToLocalStorage(){
        const objectAsString = JSON.stringify(this.recipesList);
        localStorage.setItem("recipes", objectAsString);
    }

    public loadFromLocalStorage(){
        const retrievedString = localStorage.getItem("recipes");
        const retrievedObject = JSON.parse(retrievedString!);
        this.recipesList = retrievedObject
        return this.recipesList
    }
}