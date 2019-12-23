import React from 'react';
import '../ThemeToggler/ThemeToggler.css';


const changeTheme_Dark = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(129, 128, 128)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(23, 23, 23)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(62, 62, 62)');

  document.documentElement.style.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(59, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(219, 34, 001)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
};
const changeTheme_Light = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(156, 156, 156)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(113, 113, 113)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(232, 233, 232)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(59, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(219, 34, 001)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
};
const changeTheme_Red = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(223, 55, 55)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(133, 003, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(83, 00, 00)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(219, 22, 22)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(59, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(149, 34, 1)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
};
const changeTheme_Blue = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(50, 97, 255)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(003, 003, 223)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(000, 000, 080)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(22, 219, 22)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(059, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(149, 034, 100)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
};
const changeTheme_Green = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(55, 223, 055)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(003, 133, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(000, 083, 000)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(22, 219, 22)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(059, 134, 22)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(149, 034, 100)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(140, 244, 140)');
  document.documentElement.style.setProperty('--light-text', 'rgb(255, 255, 255)');
};
const changeTheme_Yellow = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(235, 220, 13)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(183, 163, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(083, 083, 000)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(222, 219, 22)');
  document.documentElement.style.setProperty('--bttn-submit-dark', 'rgb(059, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(200, 200, 190)');
  document.documentElement.style.setProperty('--input-text', 'rgb121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
};

function ThemeToggler() {
    
return <div className="ThemeToggler-Wrapper">
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Dark"    onClick={changeTheme_Dark}>Dark</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Light"   onClick={changeTheme_Light}>Light</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Red"     onClick={changeTheme_Red}>Red</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Blue"    onClick={changeTheme_Blue}>Blue</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Green"   onClick={changeTheme_Green}>Green</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Yellow"  onClick={changeTheme_Yellow}>Yellow</button>
  </div>
};
export default ThemeToggler;

//{deleteAllItems etc} is how i pass in props with hooks!!!
//updateItems({ term: '', items: [...items, term,] })


//className={ this.state.condition ? "button toggled" : "button" }