import React from 'react'

const RoughWork = () => {
  const [messages, setMessages] = React.useState(['a', 'b']);
  return (
     <div>
      <h1>{messages.length ? "you have " :"You all caught up!"}</h1>
     </div>

  )
}

export default RoughWork