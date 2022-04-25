const form = document.querySelector("form");
const bookList = document.getElementById("book-list");
const AllBookSection = document.getElementById("All-Books");
const formSection = document.getElementById("formSection");
const ContactSection = document.getElementById("contact-us");


// for the nav section
const navBtns = document.querySelectorAll("nav button");

//variables for input fields

const Author = document.getElementById("author");
const Title = document.getElementById("title");

export {
  form,
  bookList,
  AllBookSection,
  navBtns,
  formSection,
  ContactSection,
  Author,
  Title
};
