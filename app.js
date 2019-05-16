let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));

Array.from(titles).forEach(function (item) {
    console.log(item);

});
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

let wrap = document.querySelector('#wrapper');
console.log(wrap);

const wmf = document.querySelector('.book-list li:nth-child(2) .name');
console.log (wmf);

let books = document.querySelector('.book-list li .name');
console.log (books);

books = document.querySelectorAll('.book-list li .name');
console.log (books);

Array.from(books).forEach(function (book) {
    console.log(book);
});

//5.Changing text & HTML content
const books1 = document.querySelectorAll('.book-list li .name');

Array.from(books1).forEach(function (book) {
    return book.textContent += ' (Book title)';
});

const bookList = document.querySelector('.book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';