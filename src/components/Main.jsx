import React from 'react'

const Main = () => {

  const [list, setList]= React.useState([]);
  const ingMap= list.map((data)=>{
        return <li key={data}>{data}</li>
    })
  function submit(event){
    const newIng = event.get("ingredient");
    setList(prev=> [...prev, newIng])
    console.log(newIng);    
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
    <div className='add-items'>
    <section>
      <h2>Ingredients in hand:</h2>
      <ul>{ingMap}</ul>
      <div>
        <div>
        <h3>Ready for your recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button>Get a recipe</button>
      </div>
    </section>
    </div>
    </main>
  )
}

export default Main