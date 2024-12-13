import React from "react"
import avatar from "../assets/user.png"
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let star= contact.isFavorite ? starFilled : starEmpty;
    let ariavar = contact.isFavorite ? "Remove from fav" : "Add to fav";
    let imgChangeAlt= contact.isFavorite ? "filled star" : "empty star";

    function toggleFavorite() {
        setContact((prev=>{
          return {...prev, isFavorite: !prev.isFavorite}
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={star}
                            aria-pressed={contact.isFavorite}
                            aria-label={ariavar}
                            alt={imgChangeAlt}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}