import React from 'react'

const FormAction = () => {

    function signUp(event){ //removed 3 lines of FormData and refresh and target current value, because in React19 
        const gmail= event.get("email")//the action attribute in form receives a function. therefore it handle everything we erased by just passing a ref var.
        const pass= event.get("password")
        const emp= event.get("emp")
        const pre= event.getAll("preference")
        const food= event.get("food")
        console.log(gmail);
        console.log(pass);
        console.log(emp);
        console.log(pre);
        console.log(food);
        console.log(Object.fromEntries(event)); //to retrive every data from the from as a object. however the checkbox still only give one value.
        const addCheckboxData= {
          ...Object.fromEntries(event),
          pre
        }
        console.log(addCheckboxData); //this will do the checkbox addition in the object array
        
      }
  return (
    <section>
        <h1>Signup form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
          <br />
          
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" />
          <br />

          <label htmlFor='des' >Description:</label>
            <textarea name='des'></textarea>
            <br />

          <fieldset>
            <legend>Emp status:</legend>
            <label>
            <input type='radio' name='emp' value="no"/>
            no emp
            </label>
            <label>
            <input type='radio' name='emp' value="part"/>
            part time
            </label>
            <label>
            <input type='radio' name='emp' value="full"/>
            full time
            </label>
          </fieldset>

          <fieldset>
            <legend>Emp preference status:</legend>
            <label>
            <input type='checkbox' name='preference' value="no"/>
            no emp
            </label>
            <label>
            <input type='checkbox' name='preference' value="part"/>
            part time
            </label>
            <label>
            <input type='checkbox' name='preference' value="full"/>
            full time
            </label>
          </fieldset>

          <label>Emp food preference</label>
            <select name='food'>
              <option >--choose from choice--</option>
              <option value='chicken'>chicken</option>
              <option value='fried rice'>fried rice</option>
              <option value='veggies'>veggies</option>
            </select>
          <button>Submit</button>
          
        </form>
      </section>
  )
}

export default FormAction