let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));

Array.from(titles).forEach(function (item) {
    console.log(item);

});
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
