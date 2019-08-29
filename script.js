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
  //TODO: retrieve form to get values for a new book
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let book = new Book(author, title, pages, read);
  // for(let key in book){
  //   console.log(key)
  //   console.log(book[key])
  // }
  myLibrary.push(book);

}

function render(){

}

function toggleForm(){
  
}
