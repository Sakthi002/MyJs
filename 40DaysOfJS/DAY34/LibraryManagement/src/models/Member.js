import { User } from "./User";

const borrowedMap = new WeakMap();

export class Member extends User {

    constructor(name, email) {
        super(name, email);
        const borrowedFromStorage = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
        borrowedMap.set(this, borrowedFromStorage);
    }

    getRole() {
        return "Member";
    }

    borrowBook(book) {
        let borrowed = borrowedMap.get(this);
        borrowed.push(book);
        book.isAvailable = false;
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
    }

    returnBook(bookId) {
        let borrowed = borrowedMap.get(this);
        let retBook = borrowed.find(book => book.id === bookId);
        let idx = borrowed.findIndex(book => book.id === bookId);

        if(idx !== -1) {
            retBook.isAvailable = true;
            borrowed.splice(idx,1);
            localStorage.setItem('borrowedBooks', JSON.stringify(borrowed));
        }
    }

    getBorrowedBooks() {
        return borrowedMap.get(this)
    }
}