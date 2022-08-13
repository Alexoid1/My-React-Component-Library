import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="buttonCreate" type="button">
  <a className="anchorC" href="#">{props.label}</a>
</button>;
}

export default Button;