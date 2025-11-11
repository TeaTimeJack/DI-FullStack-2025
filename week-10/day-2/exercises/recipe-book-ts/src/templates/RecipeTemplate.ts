
import  {RecipeCollection} from '../model/RecipeCollection'

export class HandleDOM{
    public collection:RecipeCollection

    constructor(collection:RecipeCollection) {
            this.collection = collection
    }

    public render(elmtID:string):void{
        const recipeDiv = document.getElementById(elmtID) as HTMLDivElement;
        if(!this.collection){
            recipeDiv.innerHTML = "<p>No recipes to display.</p>";
            return
        }
        const list = this.collection.recipesList
        console.log(list);
        
    
        
        if(!recipeDiv){
            return
        }
        recipeDiv.innerHTML = "";
        if(list.length===0){
            recipeDiv.innerHTML = "<p>No recipes to display.</p>";
            return
        }

        let cards = ''

        list.forEach((item)=>{
            let ingredientsList = ""
            item.ingredients.forEach((ingr)=>{
                    ingredientsList+=`<li>${ingr}</li>`        
                        })
            cards+= `
                    <div style="border:1px solid purple; margin:10px; padding:5px">
                    <h2>${item.title}</h2>
                    <h4>Ingredients:</h4>
                    <ul>
                        ${ingredientsList}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>${item.instructions}</p>
                    <button class="toggle-fav-btn" style="margin:5px" data-id="${item.id}">${item.isFavorite?"Push to UNLIKE":"Push to LIKE"}</button>
                    <button class="remove-btn" style="margin:5px" data-id="${item.id}">Remove</button>
                    </div>    

                    `
        })
        recipeDiv.innerHTML = cards;
        this.addEventListeners(elmtID)
    }

    private addEventListeners(elmtID: string) {
        const recipeDiv = document.getElementById(elmtID);
        if (!recipeDiv) return;

        recipeDiv.querySelectorAll('.toggle-fav-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const recipeID = target.getAttribute('data-id');
                if (recipeID) {
                    this.collection.toggleRecipeFav(recipeID); 
                    this.collection.saveToLocalStorage();
                    this.render(elmtID);
                }
            });
        });
        
        recipeDiv.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const recipeID = target.getAttribute('data-id');
                if (recipeID) {
                    this.collection.removeRecipe(recipeID); 
                    this.collection.saveToLocalStorage();
                    this.render(elmtID); 
                }
            });
        });
    }
}