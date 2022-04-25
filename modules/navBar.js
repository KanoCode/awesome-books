import {
  bookList,
  navBtns,
  AllBookSection,
  formSection,
  ContactSection,
} from "./domElements.js";



navBtns.forEach((a, i, arr) => {
  a.classList.remove("active-btn");
  a.addEventListener("click", () => {
    if (i == 0) {
      console.log(AllBookSection);
      AllBookSection.style.display = "flex";
      formSection.style.display = "none";
      ContactSection.style.display = "none";
      arr[1].classList.remove('active-btn');
      arr[2].classList.remove('active-btn')

    } else if (i === 1) {
      AllBookSection.style.display = "none";
      formSection.style.display = "flex";
      ContactSection.style.display = "none";
      arr[0].classList.remove('active-btn');
      arr[2].classList.remove('active-btn')
      console.log(formSection);
    } else {
      AllBookSection.style.display = "none";
      formSection.style.display = "none";
      ContactSection.style.display = "flex";
      arr[0].classList.remove('active-btn');
      arr[1].classList.remove('active-btn')
    }
    a.classList.add("active-btn");
  });
});

export { bookList };