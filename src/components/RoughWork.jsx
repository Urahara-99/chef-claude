import React from 'react'

const RoughWork = (props) => {
    
  return (
    <>
    <button style={{ backgroundColor: props.color}}
      className={props.display ? "on" : undefined }
      onClick={()=>props.toggle(props.id)}></button>
    </>
  )
}

export default RoughWork