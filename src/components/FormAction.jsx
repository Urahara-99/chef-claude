import React from 'react'


function signup(event){ //removed 3 lines of FormData and refresh and target current value, because in React19 
    //the action attribute in form receives a function. therefore it handle everything we erased by just passing a ref var.

    event.preventDefault()
    const gmail= event.get("email")
    console.log(gmail);
    
  }
const FormAction = () => {
  return (
    <section>
        <h1>Signup form</h1>
        <form action={signup}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
          <br />
          
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" />
          <br />
          
          <button>Submit</button>
          
        </form>
      </section>
  )
}

export default FormAction