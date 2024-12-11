import React from 'react'

const Rough = () => {

    const ing = ["chicken", "spice", "curry"];
    const ingMap= ing.map((data)=>{
        return <li key={data}>{data}</li>
    })

  return (
    <>
        {ingMap} 
    </>
  )
}

export default Rough