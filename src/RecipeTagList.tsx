import { IRecipeTagListProps } from "./PropTypes"
import RecipeTag from "./RecipeTag"

export default function RecipeTagList(props: IRecipeTagListProps) {

    return (
        <div>
            <h2>Choose a tag below</h2>
            <ul style={{listStyleType: "none", borderTop: "solid", borderRight: "solid", borderLeft: "solid", padding: 0}}>
                {props.tagList.map((tag) => <RecipeTag tagName={tag} onSelectTag={props.onSelectTag}/>)}
            </ul>
        </div>
    )
}
