import React, { Component } from 'react';

class Uncontrolled extends Component {
 
   handelSubmit=(e)=>{
    e.preventDefault();
   const state={
    name:this.name.value,
    lastname:this.lastname.value,
}
console.log(state);
   }
    render(){
        return(
            <div className="container">
            <form>
                <div className='form_element'>
                <label>Enter Your First Name</label>
                <input type='text' ref={(input)=>this.name=input}/>
                </div> 
                {console.log(this.state)}
                <div className='form_element'>
                <label>Enter Your Last Name</label>
                <input type='text' ref={(input)=>this.lastname=input}/>
                </div> 
                <button onClick={this.handelSubmit}>Sign in</button>
            </form>
        
        </div>
        )
    }
}

export default Uncontrolled;