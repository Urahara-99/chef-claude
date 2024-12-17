import React from 'react'
import padData from '../pads'
import RoughWork from './RoughWork';

const Rough = () => {
    const [pads, setPads]= React.useState(padData);

    function toggleButton(id){
      setPads(prev=> prev.map(pad=>{
        return pad.id === id ? {...pad, on: !pad.on} : pad })
        )}

    const displayColor = pads.map(pad=>(
        <RoughWork key={pad.id} color={pad.color} id={pad.id} display={pad.on} toggle={toggleButton}/>
    ))
    
  return (
  
    <main>
        <div className='pad-container'>
            {displayColor}
        </div>
    </main>
  
  )
}

export default Rough