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
// import { swiper } from './swiper/swiper.js';

/*===============Other===============*/

function futureVideo() {
  const futureBox = document.querySelector('.video-future__box');
  const futureImg = futureBox.querySelector('.video-future__img');
  const futureVideo = futureBox.querySelector('.video-future__video');
  const futurePlayBtn = futureBox.querySelector('.video-future__play-btn');

  futureBox.addEventListener('click', (e) => {
    if (!e.target.classList.contains('video-future__video')) {
      futureImg.classList.add('hide');
      futureVideo.classList.add('show-video');
      futurePlayBtn.classList.add('hide');
    }
  });
}

futureVideo();
