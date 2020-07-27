import React from "react"
import FormComponent from "./FormComponent"



class Form extends React.Component {


    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietery: {
                isVegan: false,
                isVegatarien: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.inPut = this.inPut.bind(this)
    }
  inPut(event){
      const { name,value, type, checked} =event.target 
      type === "checkbox" ? this.setState(prevState =>{
          return{
            dietery: { 
                ...prevState.dietery,
                [name]: checked 
            } 
            }
          
        }) 
      :
      this.setState({
          [name]: value
        })

  }
    render(){  
        return(
            <FormComponent 
            inPut={this.inPut}
            {...this.state}/>
        )
       
    }
}
export default Form