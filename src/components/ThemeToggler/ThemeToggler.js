import React from 'react';
import '../ThemeToggler/ThemeToggler.css';

//toggler buttons change the ::root color variables initially located in App.css.
//if you examine with dev tools you will see the style property populate in the HTML element

const docRootStyle = document.documentElement.style;

const changeTheme_Dark = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  //docRootStyle.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--app-body-color', 'rgb(23, 23, 23)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(62, 62, 62)');
// done to here
  docRootStyle.setProperty('--bttn-submit', 'rgb(76, 167, 68)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 124, 65)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(219, 34, 001)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(97, 221, 255)');
};

const changeTheme_Light = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(130, 210, 220)');
  docRootStyle.setProperty('--app-body-color', 'rgb(203, 203, 203)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(232, 233, 232)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(96, 200, 220)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(46, 100, 120)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(66, 66, 66)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(54, 54, 63)');
  docRootStyle.setProperty('--footer-text', 'rgb(33, 63, 80)');
};

const changeTheme_Red = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--app-body-color', 'rgb(133, 003, 003)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(193, 35, 35)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(223, 55, 55)');
};

const changeTheme_Blue = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--app-body-color', 'rgb(179, 202, 231)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(42, 78, 155)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(109, 123, 187)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(109, 123, 187)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(159, 176, 233)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(48, 73, 88)');
};

const changeTheme_Green = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--app-body-color', 'rgb(003, 133, 003)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(000, 083, 000)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(22, 219, 22)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(089, 134, 100)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(140, 244, 140)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(55, 223, 055)');
};

const changeTheme_Yellow = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(235, 220, 13)');
  docRootStyle.setProperty('--app-body-color', 'rgb(203, 183, 003)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(80, 80, 80)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(222, 219, 22)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(60, 60, 50)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(60, 60, 50)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(54, 54, 63)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(66, 66, 66)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(33, 63, 80)');
};

const changeTheme_Reset = () => {
  docRootStyle.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--app-body-color', 'rgb(68, 68, 68)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(215, 217, 219)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--input-text', 'rgb(121, 121, 121)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(136, 136, 136)');
  docRootStyle.setProperty('--dark-text', 'rgb(66, 66, 66)');
  docRootStyle.setProperty('--light-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(68, 68, 68)');
  docRootStyle.setProperty('--footer-text', 'rgb(165, 201, 223)');
};

function themePickerVisibility_toggle() {
  const element = document.getElementById("themePickerVisibility");
  element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";
}
//this is added as a prop to set initial style as "none", necessary for toggle to work!
  const styleObject = {
    display: "none",
}

function ThemeToggler() {
    
return <div className="ThemeToggler-Wrapper">
  <h3 id="theme-text">Pick a theme<i className="fas fa-chevron-down themeChevron" onClick={themePickerVisibility_toggle}></i></h3>
    <div id="themePickerVisibility" style={styleObject}>
      <button className="ThemeToggler_btn dark"   id="ThemeTogglerBtn--Dark"    onClick={changeTheme_Dark}></button>
      <button className="ThemeToggler_btn light"  id="ThemeTogglerBtn--Light"   onClick={changeTheme_Light}></button>
      <button className="ThemeToggler_btn red"    id="ThemeTogglerBtn--Red"     onClick={changeTheme_Red}></button>
      <button className="ThemeToggler_btn blue"   id="ThemeTogglerBtn--Blue"    onClick={changeTheme_Blue}></button>
      <button className="ThemeToggler_btn green"  id="ThemeTogglerBtn--Green"   onClick={changeTheme_Green}></button>
      <button className="ThemeToggler_btn yellow" id="ThemeTogglerBtn--Yellow"  onClick={changeTheme_Yellow}></button>
      <button className="ThemeToggler_btn reset"  id="ThemeTogglerBtn--Reset"   onClick={changeTheme_Reset}>reset</button>
    </div>
  </div>
};

export default ThemeToggler;

//{deleteAllItems etc} is how i pass in props with hooks!!!
//updateItems({ term: '', items: [...items, term,] })
//className={ this.state.condition ? "button toggled" : "button" }