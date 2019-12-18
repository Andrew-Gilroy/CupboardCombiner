import React from 'react';
import '../AppHeader/AppHeader.css';
import logo from '../../images/logo.svg';


function AppHeader() {
  // Import result is the URL of your image
  return (
  <div className="AppHeader">
    <img id="AppLogo" src={logo} alt={"Cupboard Combiner Logo"}/>
  </div>
  );
}
export default AppHeader;

//<img src={backgroundTexture} alt="" width="100%" height="100px"/>;
  