import React from 'react'

const RoughWork = (props) => {
  
  const [display, setDisplay] = React.useState(props.on);
  
  const styles = {
  backgroundColor: props.color,
 }
  return (
    <>
      <button style={styles} className={display ? "on" : null } onClick={()=>props.toggle(props.id)}></button>
    </>
  )
}

export default RoughWork