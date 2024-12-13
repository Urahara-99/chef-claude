import React from 'react'

export default function Rough() {

    const [myFavoriteThings, setmyFavouriteThings] = React.useState([])
    const allFavoriteThings = ["💦🌹", "😺", "💡", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  
    function addFavoriteThing() {
        setmyFavouriteThings(prev=>[...prev, allFavoriteThings[prev.length]])
    }
    
    return (
      <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">
          {thingsElements}
        </section>
      </main>
    )
  }