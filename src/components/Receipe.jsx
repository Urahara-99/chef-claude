import React from 'react'

const Receipe = (props) => {
  return (
    <section>  
    <div className='suggest-list'><br /><br />
    <h2>Chef Claude Recommends:</h2>
    <section>{props.recipe}</section>
    </div> 

    </section>
  )
}

export default Receipe