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

// Function to add a book to the library
function addToLibrary() {
    // Get input values from the form
    const booktitle = document.getElementById("title");
    const bookauthor = document.getElementById("author");
    const bookpages = document.getElementById("pages");
    const bookread = document.getElementById("read");

    // Check if all required fields are filled
    if (
        booktitle.value != "" &&
        bookauthor.value != "" &&
        bookpages.value >= 1
    ) {
        // Create a new Book object with the input values
        const book = new Book(
            booktitle.value,
            bookauthor.value,
            bookpages.value,
            bookread.checked ? "read" : "not read"
        );

        // Add the book to the library array
        library.push(book);

        // Log the updated library array
        console.log(library);

        // Create a card for the newly added book
        createCard(library[library.length - 1], content);
    }
}

// Function to create a card for a book and append it to the parent element
function createCard(book, parent) {
    // Create the necessary elements for the card
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    // Add appropriate classes to the elements
    card.classList.add("card");
    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    read.classList.add("book-read-btn");
    remove.classList.add("book-remove");

    // Set the text content of the elements
    title.textContent = book.title;
    author.textContent = "By " + book.author;
    pages.textContent = book.pages + " Pages";
    read.textContent = book.read;
    remove.textContent = "Remove Book";

    // Append the elements to the card
    card.append(title, author, pages, read, remove);

    // Append the card to the parent element
    parent.appendChild(card);

    // Add event listener for the read button
    read.addEventListener("click", function (e) {
        // Toggle the read status and update the button text
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
