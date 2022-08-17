import React from 'react';


interface ButtonProps {
  label: string
}

type MyState = {
  boxShadow: string;
  webkitTransform: string;
  transform: string;
  background: string;
  left: string;
  marginLeft: string;
  color: string;
};
export default class ButtonSlide extends React.Component<ButtonProps,MyState> {
  
  state: MyState = {
    boxShadow: "0 10px 20px -8px rgba(0, 0, 0,0.7)",
    webkitTransform: "",
    transform: "",
    background: "linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)",
    left: "0",
    marginLeft: "-45px",
    color: "#79f1fc"
  }
 

  hoverInButton(){
    this.setState({background:"linear-gradient(-135deg, #e570e7 0%,#79f1fc 100%)"})
  }

  hoverOutButton(){
    this.setState({background:"linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)"})
  }

  handleMouseDown(){
    this.setState({boxShadow: "0 8px 16px -8px rgba(0, 0, 0,0.7)"})
  }

  handleMouseUp(){
    this.setState({boxShadow: "0 10px 20px -8px rgba(0, 0, 0,0.7)"})
  }
  render(){
    const btnSlide: React.CSSProperties = {
        position: "relative", 
        display: "inline-block", 
        height: "50px", 
        width: "240px", 
        lineHeight: "50px", 
        margin: "25px 0", 
        padding: "0px", 
        borderRadius: "25px", 
        boxShadow: this.state.boxShadow, 
        background: this.state.background,
        transform: this.state.transform ,
        WebkitTransform: this.state.webkitTransform
    };
  
    const circle: React.CSSProperties = {
        display: "block", 
        backgroundColor: "#fff", 
        color: "#e570e7", 
        position: "absolute", 
        margin: "5px",
        marginLeft: this.state.marginLeft,
        height: "40px", 
        width: "40px", 
        top: "0", 
        left: "0", 
        borderRadius: "50%", 
        transition: "all 1.5s ease"
    }

    const title: React.CSSProperties = {
      position: "absolute", 
      left: "85px", 
      fontSize: "17px", 
      fontWeight: "bold", 
      color: "#fff", 
      transition: "all 1.5s linear"
    }

    const spanT: React.CSSProperties = {
      position: "absolute", 
      left: "85px", 
      fontSize: "17px", 
      fontWeight: "bold", 
      color: "#fff", 
      transition: "all 1.5s linear",
      opacity: "0"
  }

    return (
        <div> 
            <a style={btnSlide} 
               onMouseDown={()=> this.handleMouseDown()}
               onMouseUp={()=>this.handleMouseUp()}
               onMouseOver={()=>this.hoverInButton()}
               onMouseOut={()=>this.hoverOutButton()}>
                <span style={circle}>
                  <i></i>        
                </span>
                <span style={title}>Save Movie</span>
                <span style={spanT}>720p Hindi HD</span>
            </a> 
        </div>  )

  }
}