import 'normalize.css';
import './sass/main.sass';
import './images/logo-white.png';
import './images/logo-green-1x.png';
import './images/logo-green-2x.png';
import './images/favicon.png';
import './images/nat-1-large.jpg';
import './images/nat-2-large.jpg';
import './images/nat-3-large.jpg';
import './images/nat-4.jpg';
import './images/nat-5.jpg';
import './images/nat-6.jpg';
import './images/nat-7.jpg';
import './images/nat-8.jpg';
import './images/nat-9.jpg';
import './images/nat-10.jpg';
import './images/video.mp4';
import './images/video.webm';

const books = document.querySelectorAll('.btn--book');
const closeBtn = document.querySelector('.popup__close-btn');
const popup = document.getElementById('popup');

books.forEach((item) => {
    item.addEventListener('click', callPopup);
})

closeBtn.addEventListener('click', closePopup);
popup.addEventListener('click', closePopupOutside);

function callPopup(e) {
    e.preventDefault();

    popup.classList.add('popup--visible')
}

function closePopup(e) {
    e.preventDefault();
    if (popup.classList.contains('popup--visible')) {
        popup.classList.remove('popup--visible');
    }
}

function closePopupOutside(e) {
    e.preventDefault();

    if (e.target.classList.contains('popup')) {
        closeBtn.click();
    }
}