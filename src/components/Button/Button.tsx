import React from 'react';


interface ButtonProps {
  label: string
}

type MyState = {
  color: string;
  position: string // like this
};
export default class Button extends React.Component<ButtonProps,MyState> {
  
  state: MyState = {
    color: "white",
    position: "100%"
  }
 

  hoverInButton(){
    this.setState({color:"rgb(255, 196, 0)",position: "0 100%"})
  }

  hoverOutButton(){
    this.setState({color:"white",position: "100%"})
  }
  render(){
    const buttonCreate: React.CSSProperties = {
      //display: "inherit",
      //position: "relative",
      fontSize: "18px", 
      fontFamily: "Arial, Helvetica, sans-serif", 
      fontWeight: "bolder", 
      padding: "5px 14px", 
      margin: "5px 25px", 
      border: `3px solid ${this.state.color}`, 
      borderRadius: "10px",
      background: this.state.color
    };
  
    const anchorC: React.CSSProperties = {
      position: "relative", 
      display: "inline-block", 
      color: "black", 
      overflow: "hidden", 
      background: "linear-gradient(to right, rgb(255, 196, 0), rgb(255, 102, 0), 50%, black 50%)", 
      backgroundClip: "text", 
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent", 
      backgroundSize: "200% 100%",
      backgroundPosition: this.state.position, 
      transition: "background-position 275ms ease", 
      textDecoration: "none"
    }
    return <button style={buttonCreate} 
      type="button" 
      onMouseEnter={this.hoverInButton} 
      onMouseOut={this.hoverOutButton}>
      <a style={anchorC} href="#">{this.props.label}</a>
    </button>

  }
}