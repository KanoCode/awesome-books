import { form, Title, Author } from './domElements.js';

export const bookArr = [];
export const checkStorage = localStorage.getItem('bookArrObj');

export class UserBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    if (this.title === '' || this.author === '') {
      alert('Fill all inputs');
    } else if (!checkStorage) {
      bookArr.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(bookArr));
      window.location.reload();
    } else {
      const ArrayStored = localStorage.getItem('bookArrObj');
      const ArrayStoredParse = JSON.parse(ArrayStored);
      ArrayStoredParse.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(ArrayStoredParse));
      window.location.reload();
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = Title.value;
  const authorVal = Author.value;
  const SaveBook = new UserBook(titleVal, authorVal);
  SaveBook.addBook();
});

export default UserBook;
