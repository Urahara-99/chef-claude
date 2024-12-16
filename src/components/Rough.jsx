import React from 'react'
import padData from '../pads'

const Rough = ({darkMode}) => {
    const [pads, setPads]= React.useState(padData);
    const styles = {
        background: darkMode ? " #222222" :" #cccccc",
    }
    const displayColor = pads.map(pad=>(
        <button key={pad.id} style={styles}></button>
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