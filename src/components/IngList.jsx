import React from 'react'

const IngList = (props) => {
  const ingredientsListItems = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))
  return (
    <div className='add-items'>
     <section className='list-recipe'>
      <h2>Ingredients in hand:</h2>
      <div className='ing-list'><ul><h4>{ingredientsListItems}</h4></ul></div>
      {props.ingredients.length > 3 ?
      <div className='get-recipe' ref={props.ref}>
        <div className='recipe-box'>
        <h3>Ready for your recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className='recipe-button' onClick={props.getRecipe}>Get a recipe</button>
      </div> : null }   
    </section>  
    </div>
  )
}

export default IngList