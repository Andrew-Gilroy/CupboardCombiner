import React from 'react';
import '../ThemeToggler/ThemeToggler.css';

//toggler buttons change the ::root color variables initially located in App.css.
//if you examine with dev tools you will see the style property populate in the HTML element
function ThemeToggler({updateThemeName}) { 
const docRootStyle = document.documentElement.style;

const changeTheme_Dark = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #000000, #232526)');
  docRootStyle.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--app-body-color', 'rgb(23, 23, 23)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(62, 62, 62)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg', 'none');
  docRootStyle.setProperty('--item-bg-text', 'white');
  docRootStyle.setProperty('--item-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'none');
  docRootStyle.setProperty('--footer-text', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--box-shadow', 'rgb(145, 145, 145)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("dark");
};

const changeTheme_Light = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9)');
  docRootStyle.setProperty('--app-highlight', 'rgb(130, 210, 220)');
  docRootStyle.setProperty('--app-body-color', 'rgb(226, 226, 226)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(232, 233, 232)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(96, 200, 220)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(46, 100, 120)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(190, 94, 181)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(229, 134, 231)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(190, 94, 181)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--dark-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--box-shadow', 'rgb(168, 168, 168)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  updateThemeName("light");
};

const changeTheme_Red = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #f7797d, #FBD786, #C6FFDD)');
  docRootStyle.setProperty('--app-highlight', 'rgb(233, 55, 55)');
  docRootStyle.setProperty('--app-body-color', 'rgb(133, 003, 003)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(193, 35, 35)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(95, 95, 95)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--box-shadow', 'rgb(148, 38, 38)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("red");
};

const changeTheme_Green = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #000000, #0f9b0f)');
  docRootStyle.setProperty('--app-highlight', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--app-body-color', 'rgb(003, 133, 003)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(000, 083, 000)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(22, 219, 22)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(95, 95, 95)');
  docRootStyle.setProperty('--dark-text', 'rgb(140, 244, 140)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--box-shadow', 'rgb(38, 168, 38)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("green");
};

const changeTheme_Blue = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to top, #4b6cb7, #182848)');
  docRootStyle.setProperty('--app-highlight', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--app-body-color', 'rgb(212, 232, 255)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(41, 45, 72)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(91, 125, 152)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(235, 110, 13)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(125, 50, 13)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(91, 125, 152)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(235, 110, 13)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(125, 50, 13)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(95, 95, 95)');
  docRootStyle.setProperty('--dark-text', 'rgb(159, 176, 233)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--box-shadow', 'rgb(159, 176, 233)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("blue");
};

const changeTheme_Yellow = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #22c1c3, #fdbb2d)');
  docRootStyle.setProperty('--app-highlight', 'rgb(235, 220, 13)');
  docRootStyle.setProperty('--app-body-color', 'rgb(30, 30, 00)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(67, 57, 57)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(222, 219, 22)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(60, 60, 50)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(203, 183, 003)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(235, 220, 13)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(203, 183, 003)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(95, 95, 95)');
  docRootStyle.setProperty('--dark-text', 'rgb(195, 195, 195)');
  docRootStyle.setProperty('--light-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(203, 183, 003)');
  docRootStyle.setProperty('--box-shadow', 'rgb(183, 163, 003)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(235, 220, 13)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("yellow");
};

const changeTheme_Reset = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to top, #2C5364, #203A43, #0F2027)');
  docRootStyle.setProperty('--app-highlight', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--app-body-color', 'rgb(68, 68, 68)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(215, 217, 219)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(97, 221, 255)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(95, 95, 95)');
  docRootStyle.setProperty('--dark-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(165, 201, 223)');
  docRootStyle.setProperty('--box-shadow', 'rgb(68, 68, 68)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  updateThemeName("default");
};

// Toggles the theme picker drop down menu visibility.  
// Also toggles font awesome class to flip chevron
function themePickerVisibility_toggle() {
  const element = document.getElementById("themePickerVisibility");
  const fasClasses = document.getElementsByClassName("fas fa-chevron-down themeChevron")
  element.style.display === "none" ? element.style.display = "flex" : element.style.display = "none";
  fasClasses[0].classList.toggle("fa-chevron-up");
}


//this is added as a prop to set initial style as "none", necessary for toggle to work!
const styleObject = {
    display: "none",
};
    return <div className="ThemeToggler-Wrapper">
      <h3 id="theme-text">CHOOSE A THEME<i className="fas fa-chevron-down themeChevron" onClick={themePickerVisibility_toggle}></i></h3>
        <div id="themePickerVisibility" style={styleObject}>
          <button className="ThemeToggler_btn dark"   id="ThemeTogglerBtn--Dark"    onClick={changeTheme_Dark}></button>
          <button className="ThemeToggler_btn light"  id="ThemeTogglerBtn--Light"   onClick={changeTheme_Light}></button>
          <button className="ThemeToggler_btn red"    id="ThemeTogglerBtn--Red"     onClick={changeTheme_Red}></button>
          <button className="ThemeToggler_btn green"  id="ThemeTogglerBtn--Green"   onClick={changeTheme_Green}></button>
          <button className="ThemeToggler_btn blue"   id="ThemeTogglerBtn--Blue"    onClick={changeTheme_Blue}></button>
          <button className="ThemeToggler_btn yellow" id="ThemeTogglerBtn--Yellow"  onClick={changeTheme_Yellow}></button>
          <button className="ThemeToggler_btn reset"  id="ThemeTogglerBtn--Reset"   onClick={changeTheme_Reset}>RESET</button>
        </div>
      </div>
};

export default ThemeToggler;

//{deleteAllItems etc} is how i pass in props with hooks!!!
//updateItems({ term: '', items: [...items, term,] })
//className={ this.state.condition ? "button toggled" : "button" }