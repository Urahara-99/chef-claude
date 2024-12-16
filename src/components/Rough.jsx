import React from 'react'
import padData from '../pads'
import RoughWork from './RoughWork';

const Rough = () => {
    const [pads, setPads]= React.useState(padData);
    const displayColor = pads.map(pad=>(
        <RoughWork key={pad.id} color={pad.color} display={pad.on}/>
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