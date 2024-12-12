import React from 'react'

const Main = () => {

  const [list, setList]= React.useState([]);
  const ingMap= list.map((data)=>{
        return <li key={data}>{data}</li>
    })
  function submit(event){
    event.preventDefault()
    const formData= new FormData(event.currentTarget)
    const newIng = formData.get("ingredient");
    setList(prev=> [...prev, newIng])
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