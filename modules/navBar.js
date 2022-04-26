import {
  AllBookSection,
  formSection,
  ContactSection,
} from './domElements.js';

const NavFunction = (a, i, arr) => {
  a.addEventListener('click', () => {
    if (i === 0) {
      AllBookSection.style.display = 'flex';
      formSection.style.display = 'none';
      ContactSection.style.display = 'none';
      arr[1].classList.remove('active-btn');
      arr[2].classList.remove('active-btn');
    } else if (i === 1) {
      AllBookSection.style.display = 'none';
      formSection.style.display = 'flex';
      ContactSection.style.display = 'none';
      arr[0].classList.remove('active-btn');
      arr[2].classList.remove('active-btn');
    } else {
      AllBookSection.style.display = 'none';
      formSection.style.display = 'none';
      ContactSection.style.display = 'flex';
      arr[0].classList.remove('active-btn');
      arr[1].classList.remove('active-btn');
    }
    a.classList.add('active-btn');
  });
};

export default NavFunction;