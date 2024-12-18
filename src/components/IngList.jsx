import React from 'react'

const IngList = (props) => {
  return (
    <div className='add-items'>
    {props.mapList.length ?   
     <section className='list-recipe'>
      <h2>Ingredients in hand:</h2>
      <div className='ing-list'><ul><h4>{props.mapList}</h4></ul></div>
      {props.mapList.length > 3 ?
      <div className='get-recipe'>
        <div className='recipe-box'>
        <h3>Ready for your recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className='recipe-button' onClick={props.listShow}>Get a recipe</button>
      </div> : null }   
    </section> : null }  
    </div>
  )
}

export default IngList