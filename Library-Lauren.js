
function test(){
  console.log("hit");
};


function newBook (title, author, numberOfPages, publisher){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publisher = publisher;
};

  var library = function() {

  };

library.prototype.bookArray = new Array();
library.prototype.addBook = function(){

};
library.prototype.removeBook =  function(){

};
library.prototype.getRandomBook = function(){

};
library.prototype.getBookByTitle = function(){

};
library.prototype.getBooksByAuthor = function(){

};
library.prototype.addBooks = function(){

};
library.prototype.getAuthors = function(){

};
library.prototype.getRandomAuthorName = function(){

};

var book1 = new newBook ("Catcher in the Rye","J.D Salinger", "309", "Random House")


var gLibrary = new library();
