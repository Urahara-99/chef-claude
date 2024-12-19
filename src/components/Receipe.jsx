import React from 'react'
import Markdown from 'react-markdown'


const Receipe = (props) => {
  return (
    <section>  
    <div className='suggest-list'><br /><br />
    <h2>Chef Claude Recommends:</h2>
    <Markdown>{props.recipe}</Markdown>
    </div> 
    </section>
  )
}

export default Receipe