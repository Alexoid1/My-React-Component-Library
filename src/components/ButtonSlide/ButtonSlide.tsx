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
export default class ButtonSlide extends React.Component<ButtonProps,MyState> {
  
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
    const btnSlide: React.CSSProperties = {
        position: "relative", 
        display: "inline-block", 
        height: "50px", 
        width: "240px", 
        lineHeight: "50px", 
        margin: "25px 0", 
        padding: "0px", 
        borderRadius: "25px", 
        boxShadow: "0 10px 20px -8px rgba(0, 0, 0,0.7)", 
        background: "linear-gradient(135deg, #e570e7 0%,#79f1fc 100%)" 
    };
  
    const circle: React.CSSProperties = {
        display: "block", 
        backgroundColor: "#fff", 
        color: "#e570e7", 
        position: "absolute", 
        margin: "5px", 
        height: "40px", 
        width: "40px", 
        top: "0", 
        left: "0", 
        borderRadius: "50%", 
        transition: "all 1.5s ease"
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

    return 
        <div> 
            <a style={btnSlide} >
                <span style={circle}>
                <i class="fa-solid fa-film"></i>        
                </span>
            
                <span class="title">Save Movie</span>
                <span class="title title-hover">720p Hindi HD</span>
            </a> 
        </div>  

  }
}