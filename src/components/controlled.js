import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        firstname:'',
        lastname:'',
        
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className='form_element'>
                    <label>Enter Your First Name</label>
                    <input type='text' onChange={(e)=>this.setState({firstname:e.target.value})}/>
                    </div> 
                    {console.log(this.state)}
                    <div className='form_element'>
                    <label>Enter Your Last Name</label>
                    <input type='text' onChange={(e)=>this.setState({lastname:e.target.value})}/>
                    </div> 
                </form>
            
            </div>
        )
    }
}

export default Controlled;