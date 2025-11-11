import './style.css'
import {RecipeItem} from './model/RecipeItem'
import {RecipeCollection} from './model/RecipeCollection'
import {v4} from "uuid";
import {HandleDOM} from './templates/RecipeTemplate'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`<div class="recipe-app">
  <form id="recipeEntryForm">
    <input type="text" id="recipeTitle" placeholder="Recipe Title" required />
    <br>
    <textarea
      id="ingredients"
      placeholder="Enter ingredients (one per line)"
      required
    ></textarea>
    <br>
    <textarea
      id="instructions"
      placeholder="Enter cooking instructions"
      required
    ></textarea>
    <br>
    <button  type="submit">Add Recipe</button>
  </form>

  <div id="recipeContainer"></div>

  <button id="clearRecipesButton">Clear All Recipes</button>
</div>
`;

const allRecipes = new RecipeCollection();

const chikenSoup = new RecipeItem(v4(),"Chiken Soup",["chiken","water","salt","peper"],"fry the chiken, pour the water, add salt and peper", true);
const chikenSoup2 = new RecipeItem(v4(),"Chiken2 Soup2",["chiken2","water2","salt2","peper2"],"fry the chiken2, pour the water2, add salt and peper2", false);
allRecipes.addNewRecipe(chikenSoup)
allRecipes.addNewRecipe(chikenSoup2)

const showRecipesDivStart = new HandleDOM(allRecipes);
showRecipesDivStart.render("recipeContainer")
const recipeForm = document.getElementById("recipeEntryForm") as HTMLFormElement;
recipeForm.addEventListener('submit', addNewRecipeToList);


function addNewRecipeToList(e:any) {
  e.preventDefault()
  const titleINput = document.getElementById("recipeTitle") as HTMLInputElement;
  const ingredientsINput = document.getElementById("ingredients") as HTMLInputElement;
  const instructionsINput = document.getElementById("instructions") as HTMLInputElement;
  const ingredientsArry = ingredientsINput.value.split('\n')
  
  const newRec = new RecipeItem(v4(), titleINput.value, ingredientsArry, instructionsINput.value, false)
  allRecipes.addNewRecipe(newRec)
  const showRecipesDiv = new HandleDOM(allRecipes);
  showRecipesDiv.render("recipeContainer")
 
  titleINput.value='';
  ingredientsINput.value="";
  instructionsINput.value='';

  
}




