import React from "react"

function FormComponent(props){
    return (
        <div>
          <form>
              <input 
              value={props.firstName}
              name="firstName" 
              placeholder="First Name" 
              onChange={props.inPut}/>
          <br/>
              <input  
              value={props.lastName}
              name="lastName" 
              placeholder="Last Name" 
              onChange={props.inPut}/>
          <br/>
              <input 
              value={props.age}
              name="age" 
              placeholder="Age" 
              onChange={props.inPut}/>
          <br/>
              <input
              type="radio"
              name="gender"
              value="male"
              onChange={props.inPut}/>
              <label>Male</label>

              <input
              type="radio"
              name="gender"
              value="female"
              onChange={props.inPut}/>
              <label>Female</label>

              <input
              type="radio"
              name="gender"
              value="other"
              onChange={props.inPut}/>
              <label>Other</label>
          <br/>
              <select name="location"
                  onChange={props.inPut}>
                  <option value="">---Pleas choose ---</option>
                  <option value="London">London</option>
                  <option value="Budapest">Budapest</option>
                  <option value="New York">New York</option>
                  <option value="Moscow">Moscow</option>
                  <option value="Sydnie">Sydnie</option>
              </select>
          <br/>
              <label>
                  <input 
                  type="checkbox"
                  name="isVegan"
                  onChange={props.inPut}
                  checked={props.dietery.isVegan}/>
                  Vegan
                  <input 
                  type="checkbox"
                  name="isVegatarien"
                  checked={props.dietery.isVegatarien}
                  onChange={props.inPut}/>
                  Vegatarien
                  <input 
                  type="checkbox"
                  name="isKosher"
                  checked={props.dietery.isKosher}
                  onChange={props.inPut}/>
                  Kosher
                  <input 
                  type="checkbox"
                  name="isLactoseFree"
                  checked={props.dietery.isLactoseFree}
                  onChange={props.inPut}/>
                  Lactose intolorant
              </label>
          <br/>
              <button>Submit</button>
          </form>

          <h1>Enterd information</h1>
          <h3>Your name is: {props.firstName} {props.lastName}</h3>
          <h3>Your age is: {props.age}</h3>
          <h3>Your gender is: {props.gender}</h3>
          <h3>You are going to: {props.location}</h3>
          <h3>Your dietery restrictions are:   </h3>
          <p>
              {props.dietery.isVegan ? " Vegan " : ""}
              {props.dietery.isVegatarien? " Vegatrien " : ""}
             {props.dietery.isKosher? " Kosher " : ""}
             {props.dietery.isLactoseFree? " Lactose Free " : ""}
          </p>
           
        </div>  
      )
}

export default FormComponent