import { IRecipeListProps } from "./PropTypes"
import Recipe from "./Recipe"

export default function RecipeList({recipes, clickBack}: {recipes: IRecipeListProps, clickBack: any}) {

    
    return (
        <div>
            <h2>Recipes</h2>
            <button onClick={clickBack}>Back</button>
            {recipes.recipes.map((recipe) => <Recipe recipeData={recipe}/>)}
            
        </div>
    )
}
