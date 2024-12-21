import React from 'react'
import Receipe from './Receipe';
import IngList from './ingList';
import { getRecipeFromMistral } from '../ai';

const Main = () => {

  const [ingredients, setIngredients]= React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState("");
  async function getRecipe(){
    const generateRecipe = await getRecipeFromMistral(ingredients);
    setRecipeShown(generateRecipe);
  }

  React.useEffect(()=>{
    if(recipeShown.length && recipeShownArea.current){
      recipeShownArea.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipeShown])

  const recipeShownArea = React.useRef(null)
  function submit(formData){
    const newIng = formData.get("ingredient");
    setIngredients(prev=> [...prev, newIng])    
  }
  return (
    <main>
    <form action={submit} >
        <input 
        type='text'
        placeholder='e.g spices'
        className='input-tag'
        name='ingredient'
        />
        <button>Add ingredient</button>
    </form>
    {ingredients.length > 0 && 
    <IngList 
      ingredients={ingredients}
      getRecipe={getRecipe}
      ref={recipeShownArea}
    />}
    {recipeShown &&
      <Receipe
        recipe={recipeShown}
      />}
    </main>
  )
}

export default Main