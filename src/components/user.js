import React, { Component } from 'react';
import Formfields from './widgets/forms/formfiled';

class User extends Component {

    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                lavel:true,
                lavelText:'Name',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter Your Name'
                },
                validation:{
                    required:true,
                    minLen:5, 
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                lavel:true,
                lavelText:'Lastname',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter Your LastName'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value:'',
                lavel:true,
                lavelText:'Message',
                config:{
                    name:'message_input',
                    row:4,
                    col:36
                },
                validation:{
                    required:true
                },
                valid:true,
            },
            age:{
                element:'select',
                value:'',
                lavel:true,
                lavelText:'Age',
                config:{
                    name:'age_input',
                    options:[
                {val:"1",text:'18-20'},
                {val:"2",text:'20-30'},
                {val:"3",text:'30+'}
            ]
                },
                validation:{
                    required:true
                },
                valid:true,
            },

        }
        
    }
updateform=(newState)=>{
    this.setState({
        formData:newState
    })
}
submitForm=(e)=>{
   e.preventDefault() ;
   let dataToSubmit={};
   let formIsValid=true;
   for(let key in this.state.formData){
       dataToSubmit[key]=this.state.formData[key].value
   }
   for(let key in this.state.formData){
    formIsValid=this.state.formData[key].valid&&formIsValid;
}
 if(formIsValid){
   console.log(dataToSubmit);
 }
}
    render(){
        return(
            <div className='container'> 
            <form onSubmit={this.submitForm}>
<Formfields 
formData={this.state.formData}
change={(newState)=>this.updateform(newState)}
/>
            <button type="submit">Submit</button>
            </form>
                
            </div>
        )
    }
}

export default User;