function Book(author, title, pages, read){
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read +'.';
  }
}
