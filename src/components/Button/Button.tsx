import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string,
  variant: string
}



const Button = (props: ButtonProps) => {
 if(props.variant==="cromatic"){
    return <button className="buttonCreate" type="button">
    <a className="anchorC" href="#">{props.label}</a>
  </button>;
 }else if (props.variant === "simple"){
  return <button type="button" className="searchBook">{props.label}</button>
 }
}

export default Button;