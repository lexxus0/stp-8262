import Cookies from 'js-cookie';

const COOKIE_NAME = 'acceptCookies';

if (!Cookies.get(COOKIE_NAME)) {
  document.addEventListener('DOMContentLoaded', () => {
    const cookiesWindow = document.querySelector('.cookies-popup');
    const overlay = document.querySelector('.overlay');
    const acceptBtn = document.querySelector('.accept');
    const declineBtn = document.querySelector('.decline');

    setTimeout(() => {
      if (!Cookies.get(COOKIE_NAME)) {
        cookiesWindow.classList.add('show-cookies-popup');
        overlay.classList.add('show-overlay');
      }
    }, 1000);

    const handleAddCookie = () => {
      Cookies.set(COOKIE_NAME, 'true', { expires: 5 / (24 * 60) }); // 5 хвилин
      hideCookiesPopup();
    };

    const handleRemoveCookie = () => {
      Cookies.set(COOKIE_NAME, 'false', { expires: 5 / (24 * 60) });
      hideCookiesPopup();
    };

    const hideCookiesPopup = () => {
      cookiesWindow.classList.remove('show-cookies-popup');
      overlay.classList.remove('show-overlay');
    };

    acceptBtn.addEventListener('click', handleAddCookie);
    declineBtn.addEventListener('click', handleRemoveCookie);
  });
}
