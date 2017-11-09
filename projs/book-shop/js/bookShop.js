'use strict'
console.log('Book shop')

var gBooks = [
    {
        title: 'book1',
        price: 75,
        rate: 0
    },
    {
        title: 'book2',
        price: 100,
        rate: 0
    },
    {
        title: 'book3',
        price: 150,
        rate: 0
    }
]

renderBooks(gBooks)

function renderBooks(books) {
    var strHtmlBooks = '';
    for (var i = 0; i < books.length; i++) {
        strHtmlBooks += '<tr><td>' + (i + 1) + '</td><td>' + books[i].title + '</td>\
        <td>'+ books[i].price + '</td><td> <button data-toggle="modal" data-target="#exampleModal" onclick="readBook('+ i +')"> read</button>\
        <button data-toggle="modal" data-target="#exampleModal" onclick="readAndUpdateBook('+ i + ')"> update</button> \
        <button onclick="deleteBook('+ i + ')">delete</button></td></tr>';
    }
    var elTable = document.querySelector('.bookTable');
    elTable.innerHTML = strHtmlBooks;
}

function deleteBook(bookId) {
    gBooks.splice(bookId, 1)
    renderBooks(gBooks)
}

function readAndAddNewBook() {
    document.querySelector('.modal-title').innerHTML = 'Add new book'
    document.querySelector('.modal-body').innerHTML = 'name: <input class="name" type="text"> <br><br> price: <input class="price" type="text">'
    document.querySelector('.saveChanges').innerHTML = '<button onclick="addBook()" type="button" class="btn btn-primary" data-dismiss="modal">\
    Save changes</button>'
}

function addBook() {
    var name = document.querySelector('.name').value;
    var price = document.querySelector('.price').value;
    gBooks.push({ title: name, price: price })
    renderBooks(gBooks)
}

function readAndUpdateBook(bookId) {
    document.querySelector('.modal-title').innerHTML = 'Update price'
    document.querySelector('.modal-body').innerHTML = 'price: <input class="price" type="text">'
    document.querySelector('.saveChanges').innerHTML = '<button onclick="updateBook('+ bookId +')" type="button" class="btn btn-primary" data-dismiss="modal">\
    Save changes</button>'
}

function updateBook(bookId, bookPrice) {
    var bookPrice = document.querySelector('.price').value;    
    gBooks[bookId].price = bookPrice;
    renderBooks(gBooks)    
}

function changeRate (bookId, op) {
    gBooks[bookId].rate += op
    if (gBooks[bookId].rate < 0 || gBooks[bookId].rate > 10) {
        gBooks[bookId].rate -= op
    }    
    var elRate = document.querySelector('.bookRate')
    elRate.innerHTML = gBooks[bookId].rate
}

function readBook(bookId) {
    document.querySelector('.modal-title').innerHTML = 'Read book'
    document.querySelector('.modal-body').innerHTML = '\
    <img class="img-fluid d-block mx-auto" src="img/'+ (bookId + 1) + '.jpg" alt="">\
    <h1>'+ gBooks[bookId].title + '</h1>\
    <p>Price: '+ gBooks[bookId].price + '</p>\
    <p class="inlineP"> book rate: &nbsp\
    <i class="fa fa-thumbs-up fa-lg" aria-hidden="true" onclick="changeRate('+ bookId +', 1)"> </i>&nbsp\
    <span class="bookRate">' + gBooks[bookId].rate + ' </span>&nbsp\
    <i class="fa fa-thumbs-down fa-lg" aria-hidden="true" onclick="changeRate('+ bookId +', -1)"></i> </p>'
    document.querySelector('.saveChanges').innerHTML = '<button type="button" class="btn btn-primary" data-dismiss="modal">\
    Save changes</button>'
}