import React from 'react';


interface ButtonProps {
  label: string
}

type MyState = {
  left: string;
  right: string;
  top: string;
  bottom: string;
};
export default class Button2 extends React.Component<ButtonProps,MyState> {
  
  state: MyState = {
    left: "-100%",
    right: "-100%",
    top: "-100%",
    bottom: "-100%"
  }
 

  hoverInButton(){
    this.setState({left:"0", right: "0", top: "0", bottom: "0"})
  }

  hoverOutButton(){
    this.setState({left:"-100%", right: "-100%", top: "-100%", bottom: "-100%"})
  }
  render(){
    const div: React.CSSProperties = {
        justifyContent: "center", 
        alignItems: "center", 
        display: "flex", 
        width: "300px",
        height: "100px",
        position: "relative",
        overflow: 'hidden',
        paddingTop: "20px"
        
    };
  
    const button: React.CSSProperties = {
        border: "none", 
        fontSize: "30px", 
        height: "100px", 
        width: "300px", 
        textTransform: "uppercase", 
        letterSpacing: "10px", 
        backgroundColor: "white", 
        position: "relative", 
        overflow: "hidden"
    }

    const before: React.CSSProperties = {
        position: "absolute", 
        top: "0", 
        left: this.state.left, 
        width: "100%", 
        height: "4px", 
        backgroundColor: "black", 
        transition: "all 1s"
    }

    const after: React.CSSProperties = {
        position: "absolute", 
        bottom: "0", 
        right: this.state.right, 
        width: "100%", 
        height: "4px", 
        backgroundColor: "black", 
        transition: "all 1s"
    }

    const spanBefore: React.CSSProperties = {
        position: "absolute", 
        top: this.state.top, 
        right: "0%", 
        width: "4px", 
        height: "100%", 
        backgroundColor: "black", 
        transition: "all 1s"
    }

    const spanAfter: React.CSSProperties = {
        position: "absolute", 
        bottom: this.state.bottom, 
        left: "0%", 
        width: "4px", 
        height: "100%", 
        backgroundColor: "black", 
        transition: "all 1s"
    }

    return <div style={div}>
        <div style={before}></div>
        <button style={button} onMouseOver={()=>this.hoverInButton()} 
    onMouseOut={()=>this.hoverOutButton()}>
            Submit
            <div style={spanBefore}></div>
            <span>{this.props.label}</span>
            <div style={spanAfter}></div>
        </button>
        <div style={after}></div>
    </div>

  }
}