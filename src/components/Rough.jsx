import React from 'react'

const Rough = () => {
    
    const [count, setCount] = React.useState(0);

    function increment(){
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
    }

    function decrement(){
        setCount((prev)=>prev-1)
    }
    
   
return (
    <>
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decrement}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={increment}>+</button>
            </div>
        </main>
    </>
  )
}

export default Rough