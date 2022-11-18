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