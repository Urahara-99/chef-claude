import React from 'react'
export default function PropsMaking(props) {

  const [isShown, setIsShown]= React.useState(false);

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
}

return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        { isShown ? <p>{props.punchline}</p> : null}
        <button onClick={toggleShown} >{isShown ? "Hide punch" : "Show punch"}</button>
        <hr />
    </div>
)

}