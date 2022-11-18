import React from 'react';
import '../AppFooter/AppFooter.css';
import reactLogo from '../../assets/images/reactLogo.svg';

function AppFooter() {
  return (
    <div className="AppFooter">
      <img src={reactLogo} alt="React Logo" id="footerReactLogo"/>
      <p id="FooterText--small">built with React</p>
      <p id="FooterText--medium">Andrew Gilroy 2022</p>
    </div>
    );
  }
export default AppFooter;

//<img src={backgroundTexture} alt="" width="100%" height="100px"/>;