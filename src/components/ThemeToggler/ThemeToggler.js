import React from 'react';
import '../ThemeToggler/ThemeToggler.css';

/*toggler buttons change the ::root color variables initially located in App.css.
if you examine with dev tools you will see the style property populate in the HTML element*/
function ThemeToggler({updateThemeName}) { 
const docRootStyle = document.documentElement.style;

const changeTheme_Dark = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #000000, #232526)');
  docRootStyle.setProperty('--app-highlight', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--app-body-color', 'rgb(23, 23, 23)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(62, 62, 62)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 39, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(59, 134, 155)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(23,23,23)');
  docRootStyle.setProperty('--item-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(255, 255, 255, 0.7)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--footer-text', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--box-shadow', 'rgb(37, 195, 239, 0.6)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(38, 238, 238)');
  updateThemeName("dark");
};

const changeTheme_Light = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #102838, #6DD5FA, #ffffff)');
  docRootStyle.setProperty('--app-highlight', 'rgb(130, 210, 220)');
  docRootStyle.setProperty('--app-body-color', 'rgb(226, 226, 226)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(240, 240, 243)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(130, 210, 220)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(190, 94, 181)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(130, 210, 220)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(130, 210, 220)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(59, 134, 155)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(247, 248, 248)');
  docRootStyle.setProperty('--item-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(190, 94, 181, 0.5)');
  docRootStyle.setProperty('--dark-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(135, 135, 135)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--box-shadow', 'rgb(168, 168, 168)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(229, 134, 231)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(229, 134, 231)');
  updateThemeName("light");
};

const changeTheme_Red = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #f7797d, #FBD786, #C6FFDD)');
  docRootStyle.setProperty('--app-highlight', 'rgb(233, 55, 55)');
  docRootStyle.setProperty('--app-body-color', 'rgb(251, 203, 203)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(193, 35, 35)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(223, 55, 55)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(83, 00, 00)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(83, 00, 00)');
  docRootStyle.setProperty('--item-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(248, 124, 124)');
  docRootStyle.setProperty('--dark-text', 'rgb(166, 166, 166)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--box-shadow', 'rgb(83, 0, 0)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(223, 55, 55)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(255, 55, 55)');
  updateThemeName("red");
};

const changeTheme_Green = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #1a0a0a, #a00808)');
  docRootStyle.setProperty('--app-highlight', 'rgb(110, 231, 110)');
  docRootStyle.setProperty('--app-body-color', 'rgb(1, 35, 1)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(180, 248, 180)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(110, 231, 110)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', '#9b3636');
  docRootStyle.setProperty('--bttn-remove-item-toggled', '#702929');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(110, 231, 110)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(110, 231, 110)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(059, 134, 22)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(180, 248, 180)');
  docRootStyle.setProperty('--item-text', 'rgb(8, 99, 8)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(059, 134, 22)');
  docRootStyle.setProperty('--dark-text', 'rgb(140, 244, 140)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(8, 99, 8)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--box-shadow', 'rgb(38, 168, 38)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(55, 223, 055)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(55, 223, 055)');
  updateThemeName("green");
};

const changeTheme_Blue = () => {
  // docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to top, #4b6cb7, #182848)');
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to top, #f26f18, #dcee1b)');
  docRootStyle.setProperty('--app-highlight', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--app-body-color', 'rgb(212, 232, 255)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(180, 226, 253)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(95, 194, 252)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(21, 25, 82)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(212, 232, 255)');
  docRootStyle.setProperty('--item-text', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(61, 85, 122)');
  docRootStyle.setProperty('--dark-text', 'rgb(159, 176, 233)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(21, 25, 82)');
  docRootStyle.setProperty('--box-shadow', 'rgb(159, 176, 233)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(95, 194, 252)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(95, 194, 252)');
  updateThemeName("blue");
};

const changeTheme_Yellow = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #22c1c3, #fdbb2d)');
  docRootStyle.setProperty('--app-highlight', 'rgb(255, 226, 5)');
  docRootStyle.setProperty('--app-body-color', 'rgb(76, 63, 90)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(255, 253, 209)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(255, 226, 5)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(250, 97, 15)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(255, 226, 5)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(250, 97, 15)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(250, 97, 15)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(167, 57, 27)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(255, 248, 148)');
  docRootStyle.setProperty('--item-text', 'rgb(78, 69, 79)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(67, 34, 83, 0.7)');
  docRootStyle.setProperty('--dark-text', 'rgb(195, 195, 195)');
  docRootStyle.setProperty('--light-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(250, 97, 15)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(255, 226, 5)');
  docRootStyle.setProperty('--box-shadow', 'rgb(67, 34, 83)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(255, 226, 5)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-boxShadow', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-boxShadow', 'rgb(25, 25, 25)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(239, 189, 11)');
  updateThemeName("yellow");
};

const changeTheme_Purple = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, rgb(35, 23, 39), rgb(241, 207, 252))');
  docRootStyle.setProperty('--app-highlight', 'rgb(105, 0, 204)');
  docRootStyle.setProperty('--app-body-color', 'rgb(76, 63, 90)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(241, 207, 252)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(241, 207, 252)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(211, 106, 246)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(211, 106, 246)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(228, 148, 255)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(211, 106, 246)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(228, 148, 255)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(211, 106, 246)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(240, 233, 233)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(247, 225, 254)');
  docRootStyle.setProperty('--item-text', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(67, 34, 83, 0.7)');
  docRootStyle.setProperty('--dark-text', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--light-text', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(211, 106, 246)');
  docRootStyle.setProperty('--box-shadow', 'rgb(67, 34, 83)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(67, 34, 83, 1)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-boxShadow', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-boxShadow', 'rgb(25, 25, 25)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(125, 42, 167)');
  updateThemeName("purple");
};
const changeTheme_Orange = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #2f1f32, #2f1f32)');
  docRootStyle.setProperty('--app-highlight', 'rgb(230, 92, 0)');
  docRootStyle.setProperty('--app-body-color', 'rgb(252, 237, 212)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(253, 213, 150)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(253, 213, 150)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(178, 51, 16)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(254, 153, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(178, 51, 16)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(230, 92, 0)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(178, 51, 16)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(230, 92, 0)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(178, 51, 16)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(178, 51, 16)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(252, 237, 212)');
  docRootStyle.setProperty('--item-text', 'rgb(77, 34, 0)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(173, 78, 0, 0.7)');
  docRootStyle.setProperty('--dark-text', 'rgb(77, 34, 0)');
  docRootStyle.setProperty('--light-text', 'rgb(245, 106, 0)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(178, 51, 16)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(77, 34, 0)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 249, 240)');
  docRootStyle.setProperty('--footer-text', 'rgb(230, 92, 0)');
  docRootStyle.setProperty('--box-shadow', 'rgb(173, 78, 0, 0.7)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(77, 34, 0)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-boxShadow', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-boxShadow', 'rgb(25, 25, 25)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(173, 78, 0, 0.7)');
  updateThemeName("orange");
};
const changeTheme_Pink = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to bottom, #001866, #01b3f9)');
  docRootStyle.setProperty('--app-highlight', 'rgb(230, 0, 203)');
  docRootStyle.setProperty('--app-body-color', 'rgb(247, 212, 252)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(252, 230, 254)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(239, 108, 223)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(239, 108, 223)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(239, 108, 223)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(216, 75, 199)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(216, 75, 199)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(127, 21, 115)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(252, 230, 254)');
  docRootStyle.setProperty('--item-text', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--dark-text', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--light-text', 'rgb(253, 221, 249)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(252, 230, 254)');
  docRootStyle.setProperty('--footer-text', 'rgb(216, 75, 199)');
  docRootStyle.setProperty('--box-shadow', 'rgb(216, 75, 199, 0.7)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(127, 21, 115)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-boxShadow', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-boxShadow', 'rgb(25, 25, 25)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(216, 75, 199, 0.7)');
  updateThemeName("pink");
};
const changeTheme_Random = () => {
    
  function random_rgb_bright() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(60, 255);
    const g = randomBetween(60, 255);
    const b = randomBetween(60, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };
  function random_rgb_dark() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 99);
    const g = randomBetween(0, 99);
    const b = randomBetween(0, 99);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };
  function random_rgb_bright_whites() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(230, 255);
    const g = randomBetween(230, 255);
    const b = randomBetween(230, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };
  function random_linear_gradient() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    
    const rr = randomBetween(0, 255);
    const gg = randomBetween(0, 255);
    const bb = randomBetween(0, 255);
    const rrggbb = `rgb(${rr},${gg},${bb})`;

    const linear = `linear-gradient(to bottom, ${rgb}, ${rrggbb})`
    
    return linear;
  };
  
  let random_rgb_bright_VAR = random_rgb_bright();
  let random_rgb_dark_VAR = random_rgb_dark();
  let random_rgb_dark_VAR2 = random_rgb_dark();
  let random_rgb_bright_whites_VAR = random_rgb_bright_whites();
  let random_linear_gradient_VAR = random_linear_gradient();
    
  docRootStyle.setProperty('--app-bg-color', random_linear_gradient_VAR);
  docRootStyle.setProperty('--app-highlight', random_rgb_bright_VAR);
  docRootStyle.setProperty('--app-body-color', random_rgb_dark_VAR);
  docRootStyle.setProperty('--app-body-color-light', random_rgb_bright_whites_VAR);
  docRootStyle.setProperty('--bttn-submit', random_rgb_bright_VAR);
  docRootStyle.setProperty('--bttn-submit-toggled', random_rgb_dark_VAR);
  docRootStyle.setProperty('--bttn-remove-all', random_rgb_bright_VAR);
  docRootStyle.setProperty('--bttn-remove-item', random_rgb_bright_VAR);
  docRootStyle.setProperty('--bttn-remove-item-toggled', random_rgb_dark_VAR);
  docRootStyle.setProperty('--bttn-add-ingredients', random_rgb_bright_VAR);
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', random_rgb_dark_VAR2);
  docRootStyle.setProperty('--bttn-remove-ingredients',random_rgb_bright_VAR);
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled', random_rgb_dark_VAR2);
  docRootStyle.setProperty('--input-text', random_rgb_dark_VAR);
  docRootStyle.setProperty('--counter-text', random_rgb_bright_whites_VAR);
  docRootStyle.setProperty('--item-bg-color', random_rgb_bright_whites_VAR);
  docRootStyle.setProperty('--item-text', random_rgb_dark_VAR);
  docRootStyle.setProperty('--item-box-shadow', random_rgb_dark_VAR);
  docRootStyle.setProperty('--dark-text', random_rgb_dark_VAR);
  docRootStyle.setProperty('--light-text', random_rgb_bright_whites_VAR);
  docRootStyle.setProperty('--finalMealsDisplay-text', random_rgb_dark_VAR);
  docRootStyle.setProperty('--finalMealsDisplay-text--p', random_rgb_dark_VAR);
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg','#fafafa');
  docRootStyle.setProperty('--footer-text', random_rgb_bright_VAR);
  docRootStyle.setProperty('--box-shadow', random_rgb_dark_VAR);
  docRootStyle.setProperty('--empty-cupboard-msg', random_rgb_dark_VAR);
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-boxShadow', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--dark-boxShadow', 'rgb(25, 25, 25)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', random_rgb_bright_VAR);
  updateThemeName("random");
};

const changeTheme_Reset = () => {
  docRootStyle.setProperty('--app-bg-color', 'linear-gradient(to top, #2C5364, #203A43, #0F2027)');
  docRootStyle.setProperty('--app-highlight', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--app-body-color', 'rgb(68, 68, 68)');
  docRootStyle.setProperty('--app-body-color-light', 'rgb(240, 240, 243)');
  docRootStyle.setProperty('--bttn-submit', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-submit-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-all', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item', 'rgb(219, 34, 1)');
  docRootStyle.setProperty('--bttn-remove-item-toggled', 'rgb(167, 57, 27)');
  docRootStyle.setProperty('--bttn-add-ingredients', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-add-ingredients-toggled', 'rgb(59, 134, 155)');
  docRootStyle.setProperty('--bttn-remove-ingredients','rgb(37, 195, 239)');
  docRootStyle.setProperty('--bttn-remove-ingredients-toggled','rgb(59, 134, 155)');
  docRootStyle.setProperty('--input-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--counter-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--item-bg-color', 'rgb(240, 240, 245)');
  docRootStyle.setProperty('--item-text', 'rgb(58, 58, 93)');
  docRootStyle.setProperty('--item-box-shadow', 'rgb(58, 58, 93, 1)');
  docRootStyle.setProperty('--dark-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--light-text', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--finalMealsDisplay-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--finalMealsDisplay-text--p-bg', 'rgb(255, 255, 255)');
  docRootStyle.setProperty('--footer-text', 'rgb(37, 195, 239)');
  docRootStyle.setProperty('--box-shadow', 'rgb(22, 22, 44)');
  docRootStyle.setProperty('--empty-cupboard-msg', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--theme-reset-text', 'rgb(55, 55, 55)');
  docRootStyle.setProperty('--ThemeToggler_btn-shadow', 'rgb(55, 55, 55)');
  updateThemeName("default");
  
  
};

/* Toggles the theme picker drop down menu visibility.*/  
/* Also toggles font awesome class to flip chevron*/
function themePickerVisibility_toggle() {
  //const chevron = document.getElementById("fa-chevron-up");
  
  const element = document.getElementById("themePickerVisibility");
  const fasClasses = document.getElementsByClassName("fas fa-chevron-down themeChevron")
  
  element.style.display === "none" ? element.style.display = "flex" : element.style.display = "none";
  fasClasses[0].classList.toggle("fa-chevron-up");
};

/* this is added as a prop to set initial style as "none", necessary for toggle to work!*/
const styleObject = {
    display: "none",
};

    return <div className="ThemeToggler-Wrapper">
      <h3 id="theme-text"><span>PICK A THEME</span><i className="fas fa-chevron-down themeChevron" onClick={themePickerVisibility_toggle}></i></h3>
        <div id="themePickerVisibility" style={styleObject}>
          <button className="ThemeToggler_btn dark"   id="ThemeTogglerBtn--Dark"    onClick={changeTheme_Dark}></button>
          <button className="ThemeToggler_btn light"  id="ThemeTogglerBtn--Light"   onClick={changeTheme_Light}></button>
          <button className="ThemeToggler_btn red"    id="ThemeTogglerBtn--Red"     onClick={changeTheme_Red}></button>
          <button className="ThemeToggler_btn green"  id="ThemeTogglerBtn--Green"   onClick={changeTheme_Green}></button>
          <button className="ThemeToggler_btn blue"   id="ThemeTogglerBtn--Blue"    onClick={changeTheme_Blue}></button>
          <button className="ThemeToggler_btn yellow" id="ThemeTogglerBtn--Yellow"  onClick={changeTheme_Yellow}></button>
          <button className="ThemeToggler_btn purple"  id="ThemeTogglerBtn--Purple"   onClick={changeTheme_Purple}></button>
          <button className="ThemeToggler_btn orange"  id="ThemeTogglerBtn--Orange"   onClick={changeTheme_Orange}></button>
          <button className="ThemeToggler_btn pink"  id="ThemeTogglerBtn--Pink"   onClick={changeTheme_Pink}></button>
          <button className="ThemeToggler_btn random"  id="ThemeTogglerBtn--Random"   onClick={changeTheme_Random}>🎲</button>
          <button className="ThemeToggler_btn reset"  id="ThemeTogglerBtn--Reset"   onClick={changeTheme_Reset}>RESET</button>
        </div>
      </div>
};

export default ThemeToggler;