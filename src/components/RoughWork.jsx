import React from 'react'


const RoughWork = (props) => {
  
  const [display, setDisplay] = React.useState(props.on);

  function toggleDisplay(){
    setDisplay(prev => !prev);
  }
  const styles = {
  backgroundColor: props.color,
 }
  return (
    <>
        <button style={styles} className={display ? "on" : null } onClick={toggleDisplay}></button>
    </>
  )
}

export default RoughWork