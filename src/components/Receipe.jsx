import React from 'react'
import Markdown from 'react-markdown'

const Receipe = (props) => {
  return (
    <div className='recipe-container'>
    <section className='suggested-recipe-container' aria-live='polite'>  
    <h2 className='heading-recipe'>Chef Claude Recommends:</h2>
    <Markdown>{props.recipe}</Markdown> 
    </section>
    </div>
  )
}

export default Receipe