import React from 'react'

const Main = () => {
  const ing = ["chicken", "spice", "curry"];
  const ingMap= ing.map((data)=>{
        return <li key={data}>{data}</li>
    })
  function submit(event){
    event.preventDefault()
    console.log("submitted!");
    const formData= new FormData(event.currentTarget)
    const newIng = formData.get("ingredient");
    console.log(newIng);    
  }
  return (
    <main>
    <form onSubmit={submit}>
        <input 
        type='text'
        placeholder='e.g spices'
        className='input-tag'
        name='ingredient'
        />
        <button>Add ingredient</button>
    </form>
    {ingMap}
    </main>
  )
}

export default Main