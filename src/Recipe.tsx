import { IRecipeProps } from "./PropTypes"

export default function Recipe(props: IRecipeProps) {
    
    return (
        <div style={{border: "solid"}}>
            <h3>{props.recipeData.name}</h3>
            <h4>Ingredients</h4>
            <ul>
                {props.recipeData.ingredients.map((ingredient) => <li>{ingredient}</li>)}
            </ul>
            <h4>Instructions</h4>
            <ol>
                {props.recipeData.instructions.map((instruction) => <li>{instruction}</li>)}
            </ol>
        </div>
    )
}
