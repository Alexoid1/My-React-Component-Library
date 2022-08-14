import React, { useState } from 'react';


interface ButtonProps {
  label: string
}



const Button = (props: ButtonProps) =>  {
  const [hoverStyle, setHoverstyle] = useState({color:"white",position:"100%"})
  const buttonCreate: React.CSSProperties = {
    //display: "inherit",
    //position: "relative",
    fontSize: "18px", 
    fontFamily: "Arial, Helvetica, sans-serif", 
    fontWeight: "bolder", 
    padding: "5px 14px", 
    margin: "5px 25px", 
    border: `3px solid ${hoverStyle.color}`, 
    borderRadius: "10px",
    background: hoverStyle.color
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
    backgroundPosition: hoverStyle.position, 
    transition: "background-position 275ms ease", 
    textDecoration: "none"
  }

  function hoverInButton(){
    setHoverstyle({color:"rgb(255, 196, 0)",position: "0 100%"})
  }

  function hoverOutButton(){
    setHoverstyle({color:"white",position: "100%"})
  }

  return <button style={buttonCreate} 
    type="button" 
    onMouseEnter={hoverInButton} 
    onMouseOut={hoverOutButton}>
    <a style={anchorC} href="#">{props.label}</a>
  </button>;

}

export default Button;