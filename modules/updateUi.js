import { UserBook } from "./addBook.js";
import { bookList } from "./domElements.js";
import { navBtns } from "./domElements.js";


const updateUi = () => {
    navBtns[0].classList.add('active-btn')
  const buttonRemove = document.createElement("button");
  const bookLi = document.createElement("div");
  const BookStored = JSON.parse(localStorage.getItem("bookArrObj"));

  console.log(BookStored);
  for (let i = 0; i < BookStored.length; i++) {
   
    bookLi.innerHTML += `<div class='${i % 2 == 0 ? "greyDiv" : "darkDiv"}'>
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

export { updateUi };
