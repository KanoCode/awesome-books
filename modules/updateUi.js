import { UserBook } from './addBook.js';
import { bookList, navBtns } from './domElements.js';

const updateUi = () => {
  navBtns[0].classList.add('active-btn');
  const bookLi = document.createElement('div');
  const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));

  for (let i = 0; i < BookStored.length; i += 1) {
    bookLi.innerHTML += `<div class='${i % 2 === 0 ? 'greyDiv' : 'darkDiv'}'>
         <p class="p_title">"${BookStored[i].title}" </p>
         <p class="p_by">by</p>
         <p class="p_author"> ${BookStored[i].author}</p>
        <button>Remove</button> 
             </div>`;

    bookList.append(bookLi);
  }

  const RemoveBook = new UserBook();
  RemoveBook.removeBook();
};

export default updateUi;
