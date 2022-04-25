import {bookList} from './modules/navBar.js';

import {form} from './modules/addBook.js'

import { updateUi } from './modules/updateUi.js';

import now from './modules/luxon.js'


//last modified
const lastModified = document.getElementById("last-modified");
lastModified.innerText = `${now}`


window.addEventListener('load',updateUi)
