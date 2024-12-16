import React from "react"
import avatar from "../assets/user.png"
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

export default function ToggleState(props) {
    let star= props.isFilled ? starFilled : starEmpty;
    let ariavar = props.isFilled ? "Remove from fav" : "Add to fav";
    let imgChangeAlt= props.isFilled ? "filled star" : "empty star";
    return(
        <main>
        <button
        onClick={props.handle}
        aria-pressed={false}
        className="favorite-button"
    >
        <img
            src={star}
            aria-pressed={props.isFilled}
            aria-label={ariavar}
            alt={imgChangeAlt}
            className="favorite"
        />
    </button>
    </main>
    )
}