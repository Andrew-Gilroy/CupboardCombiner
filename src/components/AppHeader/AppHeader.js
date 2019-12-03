import React from 'react';
import backgroundTexture from '../../images/metal--Texture1.jpg'; // Tell Webpack this JS file uses this image


function AppHeader() {
  // Import result is the URL of your image
  return (
  <div className="AppHeader">
  <img src={backgroundTexture} alt="" width="100%" height="100px"/>;
  </div>
  );
}
export default AppHeader;