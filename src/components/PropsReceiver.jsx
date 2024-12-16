import React from 'react'
import avatar from "../assets/user.png"
import ToggleState from './ToggleState'
const PropsReceiver = () => {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

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
            <ToggleState isFilled={contact.isFavorite} handle={toggleFavorite}/>
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

export default PropsReceiver