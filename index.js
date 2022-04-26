import book from './modules/addBook.js';

import { navBtns } from './modules/domElements.js';

import NavFunction from './modules/navBar.js';

import updateUi from './modules/updateUi.js';

import now from './modules/luxon.js';

updateUi(book);

// // last modified
const lastModified = document.getElementById('last-modified');
lastModified.innerText = `${now}`;

navBtns.forEach((a, i, b) => {
  NavFunction(a, i, b);
});

const removeBtns = document.querySelectorAll('#book-list button');
const buttonRemove = () => {
  const sortArr = JSON.parse(localStorage.getItem('bookArrObj'));
  removeBtns.forEach((a, i) => {
    a.addEventListener('click', () => {
      sortArr.splice(i, 1);
      localStorage.setItem('bookArrObj', JSON.stringify(sortArr));
      window.location.reload();
    });
  });
};

buttonRemove();