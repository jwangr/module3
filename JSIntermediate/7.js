const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    try {
        let items = books.find(book => book.id == bookId);
        return items.title;
    }
    catch (error) { console.log(`\nBookId ${bookId} not found!\n`) }
}

// function getBookTitle(bookId) {
//     let item = books.find(book => book.id == bookId);
//     return item?.title ? item.title : "";
// }

console.log(getBookTitle(1), getBookTitle(4), getBookTitle(7))
// BookId 7 not found! The Great Gatsby Brave New World undefined

function getOldBooks() {
    let oldiesButGoldies = books.filter(book => book.year < 1950);
    return oldiesButGoldies;
}

console.log(getOldBooks());

let editGenre = getOldBooks().map(addGenre);
// process each book
function addGenre(book) {
    let newBook = { ...book, genre: 'classic' };
    return newBook;
}
// Display final array of objects
console.log(editGenre);

function getTitles(authorInitial) {
    let pattern1 = authorInitial.toLowerCase()
    let authorsBooks = books.filter(book => book.author.toLowerCase().startsWith(pattern1));
    return authorsBooks;
}

console.log(getTitles('ge'), getTitles('a'));

function getTitles2(authorInitial) {
    const pattern1 = new RegExp(`\^${authorInitial}`, 'i')
    let authorsBooks = books.filter(book => {return pattern1.test(book.author) });
    return authorsBooks;
}

console.log(getTitles2('ge'), getTitles2('a'));

function latestBook() {
    let newestYear =0;
    // foreach of the new books, find a book that has a newer date of publication
    books.forEach(book => {
        if (book.year > newestYear) {
            newestYear = book.year
        }
    })

    let newestBook = books.find(book => book.year == newestYear);
    return newestBook;
}

console.log(latestBook());