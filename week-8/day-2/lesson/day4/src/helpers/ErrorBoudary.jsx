import React, { Component } from "react";

class ErrorBoudary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError = (error) => {
    console.log('getDerivedStateFromError=>',error.message);
    
    return { hasError: true };
  };

  componentDidCatch = (error, errorInfo) => {
    console.log("error=>", error);
    console.log("error=>", errorInfo);
    // this.setState({ hasError: true });
  };
  render() {
    if (this.state.hasError) return (
      <>
      <p>{this.props.fallback}</p>;
      </>
    
  )
    return this.props.children;
  }
}
export default ErrorBoudary;
