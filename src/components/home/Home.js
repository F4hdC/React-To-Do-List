import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    /* Una manera de hacer las cosas seria asi, 
    state = {value: '',
    myArray:[{
        name:''
    }]
};
    
  handleChange = this.handleChange.bind(this);
      
  

  handleChange(event) {
    this.setState({value: event.target.value});
  } */

    constructor(props) {
        super(props);
        this.state = {value: '',
    myArray:[{
        name: ''
    }]
};
    
        this.handleChange = this.handleChange.bind(this);
      }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

     addToList = (value) =>{
        const aux_array = [...this.state.myArray];
        aux_array.push({name:this.state.value});
        this.setState({
            myArray:aux_array
        })

    }
    deleteFromList = (index) =>{
        const aux_array = [...this.state.myArray];
        aux_array.splice(index,1);
        this.setState({
            myArray:aux_array
        })

    }
    render() {
        return (

            <div className="container text-center">
                <div className="b-example-divider p-2 mb-3"><h1>HOME</h1></div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/><button type="button" onClick={this.addToList}>Add</button><br/><br/>
                <ol>
                {this.state.myArray.map((items,index) => <li key={index}>{items.name}<button className="m-3" onClick={()=>{this.deleteFromList(index)}}>Delete</button></li>
                )}
                
                </ol>
                
            </div> 
        )
    }
} export default Home;

