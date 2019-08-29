let myLibrary = [];

function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
// const hobbit = new Book('J.R.R. Tolkein', 'The Hobbit', 295, 'not read yet');
// console.log(hobbit.info());

function addBookToLibrary(){
  // TODO: retrieve form to get values for a new book
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  // TODO: create new book object and add to library array
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
  // TODO: reset form to blank slate
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
  toggleForm();
}

function render(){
  // TODO: create visible versions of all books in library on html page
}

function toggleForm(){
  // TODO: turn form invisible
  let tags = document.querySelectorAll('.form');
  tags.forEach(function(e){
    e.classList.toggle('invisible');
  })
}
