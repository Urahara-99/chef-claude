import React from 'react'
import padData from '../pads'
import RoughWork from './RoughWork';

const Rough = () => {
    const [pads, setPads]= React.useState(padData);
    const displayColor = pads.map(pad=>(
        <RoughWork key={pad.id} color={pad.color} id={pad.id} display={pad.on} toggle={toggleButton}/>
    ))
    function toggleButton(id){
      setPads(prev=> prev.map(pad=>{
        return pad.id === id ? {...pad, on: !pad.on} : pad })
        )}
    
  return (
  
    <main>
        <div className='pad-container'>
            {displayColor}
        </div>
    </main>
  
  )
}

export default Rough