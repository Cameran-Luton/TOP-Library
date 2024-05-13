const library = [];
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addToLibrary() {
    const booktitle = document.getElementById("title");
    const bookauthor = document.getElementById("author");
    const bookpages = document.getElementById("pages");
    const bookread = document.getElementById("read");
    if (
        booktitle.value != "" &&
        bookauthor.value != "" &&
        bookpages.value >= 1
    ) {
        const book = new Book(
            booktitle.value,
            bookauthor.value,
            bookpages.value,
            bookread.checked ? "read" : "not read"
        );
        library.push(book);
        console.log(library);
        createCard(library[library.length - 1], content);
    }
}
function createCard(book, parent) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    card.classList.add("card");
    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    read.classList.add("book-read-btn");
    remove.classList.add("book-remove");

    title.textContent = book.title;
    author.textContent = "By " + book.author;
    pages.textContent = book.pages + " Pages";
    read.textContent = book.read;
    remove.textContent = "Remove Book";

    card.append(title, author, pages, read, remove);

    parent.appendChild(card);

    read.addEventListener("click", function (e) {
        if (this.textContent == "not read") {
            this.textContent = "read";
            book.read = "read";
        } else {
            this.textContent = "not read";
            book.read = "not read";
        }
    });

    remove.addEventListener("click", function (e) {
        parent.removeChild(card);
        library.splice(library.indexOf(book), 1);
        console.log(library);
    });
}
const openbtn = document.querySelector(".add-button");
const dialog = document.querySelector(".pop-up");
const closebtn = document.querySelector(".close-btn");

const book1 = new Book("Book", "A guy", 134, "not read");
const book2 = new Book("Book2", "Another guy", 1134, "read");
const book3 = new Book("Book3", "Another guy", 1134, "read");

library.push(book1);
library.push(book2);
library.push(book3);

openbtn.addEventListener("click", function () {
    dialog.showModal();
});
closebtn.addEventListener("click", function () {
    dialog.close();
});

const content = document.querySelector(".content");
library.forEach((element) => {
    createCard(element, content);
});
