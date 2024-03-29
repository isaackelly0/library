let readList = document.querySelectorAll('.read');
let myLibrary = [];

function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
// Books inherit a function that changes their read status
Book.prototype.readCheck = function(){
  if(this.read){
    this.read = false;
  }
  else{
    this.read = true;
  }
}

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
  render();
}

function render(){
  // TODO: create visible versions of all books in library on html page
  // first delete the old list
  let books = document.querySelector('#books');
  let child = books.lastElementChild;
  while(child){
    books.removeChild(child);
    child = books.lastElementChild;
  }
  // refresh with a new list
  for(let i = 0; i <= myLibrary.length - 1; i++){
    let shelf = document.createElement('div');
    let author = document.createElement('p');
    author.classList.add('bookAuthor');
    let title = document.createElement('p');
    title.classList.add('bookTitle');
    let pages = document.createElement('p');
    pages.classList.add('bookPages');
    let read = document.createElement('button');
    read.classList.add('bookRead');
    let yeet = document.createElement('button');
    yeet.classList.add('yeet');
    title.innerHTML = myLibrary[i].title;
    author.innerHTML = "by " + myLibrary[i].author;
    pages.innerHTML = myLibrary[i].pages + " pages";
    // change status of read
    if(myLibrary[i].read){
      read.innerHTML = "Read";
      read.addEventListener('click', function(){
        myLibrary[i].readCheck();
        render();
      })
    }
    else{
      read.innerHTML = "Unread";
      read.addEventListener('click', function(){
        myLibrary[i].readCheck();
        render();
      })
    }
    //remove item from library
    yeet.innerHTML = 'Remove'; //don't judge me, you can't name variables delete or remove, so they get yote instead
    yeet.addEventListener('click', function(){
      myLibrary.splice(i, 1);
      render();
    })
    //begin appending object traits from the books to the page object
    shelf.appendChild(title);
    shelf.appendChild(author);
    shelf.appendChild(pages);
    shelf.appendChild(read);
    shelf.appendChild(yeet);
    shelf.classList.add('book');
    shelf.setAttribute('id',i);
    document.getElementById('books').appendChild(shelf);
  }
}

function toggleForm(){
  // TODO: turn form invisible
  let tags = document.querySelectorAll('.form');
  tags.forEach(function(e){
    e.classList.toggle('invisible');
  })
}
