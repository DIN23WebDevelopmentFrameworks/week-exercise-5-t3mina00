import { IRecipeTagProps } from "./PropTypes"

export default function RecipeTag(props: IRecipeTagProps) {

    function clickTag() {
        props.onSelectTag(props.tagName);
    }

    return (
        <li onClick={clickTag} style={{borderBottom: "solid"}}>{props.tagName}</li>
    )
}
