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
    catch (error) { console.log(`\nBookId ${bookId} not found!`) }
}

console.log(getBookTitle(1), getBookTitle(4), getBookTitle(7))
// BookId 7 not found! The Great Gatsby Brave New World undefined