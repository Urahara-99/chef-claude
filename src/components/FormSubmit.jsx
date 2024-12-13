function handleSubmit(event){
    event.preventDefault()
    console.log("Form submitted")
    const Fdata= event.currentTarget
    const formData= new FormData(Fdata)
    const gmail= formData.get("email")
    console.log(gmail);
    Fdata.reset()    
  }
  
  const FormSubmit=()=> {
    return (
      <section>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit}>
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
  
  export default FormSubmit
  
  