import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import RecipeTagList from './RecipeTagList';
import { IRecipe } from './PropTypes';

const App = () => {

  const [tags, setTags] = useState([])
  const [recipeList, setRecipeList] = useState<IRecipe[]>([])
  const [selectedTag, setSelectedTag] = useState(false)

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
    .then(response => response.json())
    .then(data => setTags(data))
  }, [])

  function clickSelectTag(tagName: string) {
    fetch("https://dummyjson.com/recipes/tag/" + tagName)
    .then(response => response.json())
    .then(data => setRecipeList(data.recipes))
    setSelectedTag(true)
  }

  function clickBack() {
    setSelectedTag(false)
  }


  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        { selectedTag ? <RecipeList recipes={{recipes: recipeList}} clickBack={clickBack}/> : <RecipeTagList tagList={tags} onSelectTag={clickSelectTag}/>}
    </div>
  );
};

export default App;
