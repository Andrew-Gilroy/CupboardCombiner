import React from 'react';
import '../ThemeToggler/ThemeToggler.css';

//toggler buttons change the ::root color variables initially located in App.css.
//if you examine with dev tools you will see the style property populate in the HTML element

const changeTheme_Dark = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(23, 23, 23)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(62, 62, 62)');
// done to here
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(76, 167, 68)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(59, 124, 65)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(219, 34, 001)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(166, 166, 166)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(97, 221, 255)');

};
const changeTheme_Light = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(130, 210, 220)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(203, 203, 203)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(232, 233, 232)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(96, 200, 220)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(46, 100, 120)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(229, 134, 231)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(204, 204, 204)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(33, 63, 80)');

};
const changeTheme_Red = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(223, 55, 55)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(133, 003, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(83, 00, 00)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(223, 55, 55)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(83, 00, 00)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(193, 35, 35)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(166, 166, 166)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(223, 55, 55)');

};
const changeTheme_Blue = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(95, 194, 252)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(179, 202, 231)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(61, 85, 122)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(42, 78, 155)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(109, 123, 187)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(109, 123, 187)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(159, 176, 233)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(48, 73, 88)');

};
const changeTheme_Green = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(55, 223, 055)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(003, 133, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(000, 083, 000)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(22, 219, 22)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(059, 134, 22)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(089, 134, 100)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(140, 244, 140)');
  document.documentElement.style.setProperty('--light-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(55, 223, 055)');

};
const changeTheme_Yellow = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(235, 220, 13)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(203, 183, 003)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(80, 80, 80)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(222, 219, 22)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(60, 60, 50)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(60, 60, 50)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(54, 54, 63)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(33, 63, 80)');

};

const changeTheme_Reset = () => {
  document.documentElement.style.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  document.documentElement.style.setProperty('--app-body-color', 'rgb(68, 68, 68)');
  document.documentElement.style.setProperty('--app-body-color-light', 'rgb(215, 217, 219)');
  document.documentElement.style.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  document.documentElement.style.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  document.documentElement.style.setProperty('--bttn-remove', 'rgb(219, 34, 1)');
  document.documentElement.style.setProperty('--input-text', 'rgb(121, 121, 121)');
  document.documentElement.style.setProperty('--counter-text', 'rgb(255, 255, 255)');
  document.documentElement.style.setProperty('--item-text', 'rgb(136, 136, 136)');
  document.documentElement.style.setProperty('--dark-text', 'rgb(66, 66, 66)');
  document.documentElement.style.setProperty('--light-text', 'rgb(240, 233, 233)');
  document.documentElement.style.setProperty('--finalMealsDisplay-text', 'rgb(68, 68, 68)');
  document.documentElement.style.setProperty('--footer-text', 'rgb(165, 201, 223)');
};

function ThemeToggler() {
    
return <div><h3 id="theme-text">Pick a theme:</h3>
<div className="ThemeToggler-Wrapper">
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Dark"    onClick={changeTheme_Dark}>Dark</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Light"   onClick={changeTheme_Light}>Light</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Red"     onClick={changeTheme_Red}>Red</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Blue"    onClick={changeTheme_Blue}>Blue</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Green"   onClick={changeTheme_Green}>Green</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Yellow"  onClick={changeTheme_Yellow}>Yellow</button>
      <button className="ThemeToggler_btn" id="ThemeTogglerBtn--Reset"  onClick={changeTheme_Reset}>Reset</button>
  </div>
  </div>

};
export default ThemeToggler;

//{deleteAllItems etc} is how i pass in props with hooks!!!
//updateItems({ term: '', items: [...items, term,] })
//className={ this.state.condition ? "button toggled" : "button" }