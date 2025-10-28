
import React, {Component} from "react";

class CounterClass extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            users:[]
        }
    }
    add=()=>{
        console.log("Class is adding");
        this.setState({count: this.state.count + 1})
        
    }

    render(){
        return(
            <>
            <h2>Class Count: {this.state.count}</h2>
            <button onClick={this.add}>Add</button>
        </>
        )
    }
}

export default CounterClass