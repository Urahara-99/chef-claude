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
    {ingMap}
    </div>
    </main>
  )
}

export default Main