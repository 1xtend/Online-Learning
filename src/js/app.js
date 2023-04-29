/*===============Body and Html===============*/
export const mainElems = {
  html: document.documentElement,
  body: document.body,
};

/*===============isWebp function===============*/
import { isWebp } from './isWebp.js';
isWebp();

/*===============Burger===============*/
import { burger } from './burger.js';
burger();

/*===============Change Theme===============*/
// import { changeTheme } from './changeTheme.js';
// changeTheme();

/*===============Modal function===============*/
// import { modal } from './modal.js';
// modal();

/*===============Dropdown===============*/
import { dropdown } from './dropdown.js';
dropdown();

/*===============Swiper===============*/
import { swiper } from './swiper/swiper.js';

/*===============Scroll===============*/
import { anchorScroll } from './scroll.js';
anchorScroll();

/*===============Other===============*/

const reloadPage = () => {
  const logos = document.querySelectorAll('.logo');

  if (logos.length > 0) {
    logos.forEach((logo) => {
      logo.addEventListener('click', (e) => {
        e.preventDefault();

        location.reload();
      });
    });
  }
};

reloadPage();
