import { Admin } from "./models/Admin";
import { Book } from "./models/Book";
import { Member } from "./models/Member";
import { LibrarySystem } from "./models/services/LibraryService";
import { getRole } from "./utils/role";

const bookSection = document.getElementById("bookSection");
const borrowedSection = document.getElementById("borrowedSection");

const bookForm = document.getElementById("bookForm");
let bookList = document.getElementById('bookList');
let borrowedList = document.getElementById("borrowedList");

let currentUser = new Member('Jhon Doe', 'jhon@email.com');
let role = getRole(currentUser);

const userSwitcher = document.getElementById('userSwitcher');

userSwitcher.addEventListener("change", function(e) {

  bookSection.style.display = e.target.value === 'admin' ? 'block' : 'none';

  borrowedSection.style.display = e.target.value === 'member' ? 'block' : 'none';

  currentUser = e.target.value === 'admin' ? new Admin('Alice', 'alice@email.com') : new Member('Jhon Doe', 'jhon@email.com');

  role = getRole(currentUser);;

  renderBooks();
  renderBorrowed();
});

// Initial Load
bookSection.style.display = 'none';

const library = new LibrarySystem();

bookForm.addEventListener('submit',(e) => {
  
  e.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let genre = document.getElementById('genre').value;

  const book = new Book(title, author, genre)

  library.addBook(book);

  renderBooks();
  renderBorrowed();
})

function renderBooks() {

  bookList.innerHTML = "";

  library.getAllBooks().forEach(book => {

    let liElem = document.createElement('li');

    liElem.className = "bg-white p-4 rounded shadow flex justify-between items-center";

    let controls = "";

    if(role === 'Member' && book.isAvailable) {
      
      controls = `<button class="bg-green-500 text-white px-3 py-1 rounded" data-action="borrow" data-id="${book.id}">Borrow</button>`;
    
    } else if(role === 'Admin') {
    
      controls = `<span class="text-sm text-gray-500">${book.isAvailable ? 'Available' : 'Borrwed'}</span>`
    }

    liElem.innerHTML = `
      <div>
        <strong>${book.title}</strong> by ${book.author} <em>${book.genre}</em>
      </div>
      ${controls}
    `;

    bookList.appendChild(liElem);
  });

  bookForm.reset();
}

bookList.addEventListener('click', (e) => {

  if(role === "Admin") return;

  if(e.target.tagName === "BUTTON") {

    const id = e.target.getAttribute('data-id');
    
    const action = e.target.getAttribute('data-action');

    const book = library.getBookById(id);

    if(book && book.isAvailable && action === 'borrow') {

      currentUser.borrowBook(book);

      renderBorrowed();

      renderBooks();
    }
  }
})

function renderBorrowed() {

  borrowedList.innerHTML = "";

  if(role === "Admin") return;

  currentUser.getBorrowedBooks().forEach(book => {

    let liElem = document.createElement('li');

    liElem.className = "bg-yellow-100 p-4 rounded shadow flex justify-between items-center";

    liElem.innerHTML = `
      <div>
        ${book.title} by ${book.author}
      </div>
      <button class="bg-red-500 text-white px-3 py-1 rounded" data-action="return" data-id="${book.id}">Return</button>
    `;

    borrowedList.appendChild(liElem);
  });
}

borrowedList.addEventListener('click', function(e) {
  
  if(role === "Admin") return;

  if(e.target.tagName === 'BUTTON') {
    
    const id = e.target.getAttribute('data-id');
    const action = e.target.getAttribute('data-action');
    
    if(id && action === 'return') {
      currentUser.returnBook(id);
      renderBorrowed();
      renderBooks();
    }
  }
})

renderBooks();
renderBorrowed();


