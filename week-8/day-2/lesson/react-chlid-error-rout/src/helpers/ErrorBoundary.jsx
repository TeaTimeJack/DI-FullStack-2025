import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false,
        }
    }

    // static getDerivedStateFromError = (error) =>{
    //     console.log( "getDerivedStateFromError=>", error.message);
    //     return {hasError: true}
    // };
    
    componentDidCatch =(error, errorInfo) =>{
        console.log("Error => ", error);
        console.log("ErrorInfo => ", errorInfo);
        this.setState({hasError: true})
        
    }
  render() {
    if(this.state.hasError){
        return <p>An Error has happened HERE!</p>
    }
    return this.props.children
  }
}
