import React from 'react'

const Rough = () => {
    
    const isGoingOut = false
    
    let answer = isGoingOut ? "yes " : "no"
   
return (
    <>
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    </>
  )
}

export default Rough