import React from 'react';
import '../AppHeader/AppHeader.css';
import logo from '../../assets/images/logo.svg';

function AppHeader() {
  return (
    <div className="AppHeader">
    <img id="AppLogo" src={logo} alt={"Cupboard Combiner Logo"}/>
  </div>
  );
}

export default AppHeader;


// Import "logo" is one way to pass in the URL of my image
//<img src={logo} alt={"Cupboard Combiner Logo"} width="100%" height="100px"/>;
  

//class toggle - className={ this.state.condition ? "button toggled" : "button" }
/* 
this.state = {
  condition: false
}
this.handleClick = this.handleClick.bind(this)
}
handleClick() {
this.setState({
  condition: !this.state.condition
})
} */