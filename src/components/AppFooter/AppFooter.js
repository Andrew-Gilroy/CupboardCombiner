import React from 'react';
import '../AppFooter/AppFooter.css';


function AppFooter() {
  // Import result is the URL of your image
  return (
  <div className="AppFooter">
    <img src={require('../../images/reactLogo.svg')} alt="React Logo" id="footerReactLogo"/>
    <p id="smallFooterText">built with React</p>
    <p id="medFooterText">Andrew Gilroy 2019</p>
  </div>
  );
}
export default AppFooter;

//<img src={backgroundTexture} alt="" width="100%" height="100px"/>;
  