import React from 'react'
import Receipe from './Receipe';
import IngList from './ingList';
import { getRecipeFromMistral } from '../ai';

const Main = () => {

  const [list, setList]= React.useState([]);
  const ingMap= list.map((data)=>{
        return <li key={data}>{data}</li>
    })
  function submit(event){
    const newIng = event.get("ingredient");
    setList(prev=> [...prev, newIng])    
  }
  const [recipeShown, setRecipeShown] = React.useState(false);
  async function getRecipe(){
    const generateRecipe = await getRecipeFromMistral(ingMap);
    console.log(generateRecipe);
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
    <IngList listShow={getRecipe} mapList={ingMap}/>
    <Receipe getReceipe={recipeShown}/>
    </main>
  )
}

export default Main