

var library = function() {};

var book1 = new newBook ("Catcher in the Rye","J.D Salinger", "214", new Date(1951, 07, 16));
var book2 = new newBook ("East of Eden", "John Steinback", "500", new Date (1951, 07, 16));
var book3 = new newBook ("To Kill a Mocking Bird", "Harper Lee", "281", new Date(1960, 07, 11));
var book4 = new newBook ("1984", "George Orwell", "298", new Date (1949, 06, 08));
var book5 = new newBook ("The Outsiders", "S.E Hinton", "192", new Date (1967, 04, 24));

var book6 = new newBook ("Lord of the Flies", "William Golding", "182", new Date (1963))
var book7 = new newBook ("Fahrenheit 451", "Ray Bradbury", "158", new Date (1951));
var book8 = new newBook ("Atlas Shrugged", "Ayn Rand", "1088",new Date (1957));
var book9 = new newBook ("Catch 22", "Joseph Heller", "453", new Date (1961, 11, 10));

var aBooks = [
  book6,
  book7,
  book8,
  book9
]

library.prototype._addLi = function(){
this.$dropDown.append("<li class='listGroupItem'>" + "<input type='text' class='title' placeholder='Title of Book'> <input type='text' class='author' placeholder='Author of Book'><input type='text' class='pages' placeholder='Number of Pages'><input type='text' class='date' placeholder='Publish Date'>" + "</li>")
}


library.prototype.init=function(){
  this.$addBookButton=$("button.addBook");
  this.$removebyTitle=$("button.rmveBkByTle");
  this.$bookContainer=$("#bookContainer ul");
  this.$ranBookBtn=$("button.getRanBk");
  this.$ranAuthBtn=$("button.getRanAuth");
  this.$getAuthors=$("button.getAuths");
  this.$getBookByTitleBtn=$("button.getBookByTitleBtn");
  this.$getBookByAuthor=$("button.getBookByAuth");
  this.$dropDown=$("#dropDown ul");
  this._bindEvents();
};

library.prototype._bindEvents = function(){
  this.$addBookButton.on("click", $.proxy(this._getAddBookInputs, this));
  this.$removebyTitle.on("click", $.proxy(this._getRemoveTitleInputs, this));
  this.$ranBookBtn.on("click", $.proxy(this.getRandomBook, this));
  this.$ranAuthBtn.on("click", $.proxy(this.getRandomAuthorName, this));
  this.$getAuthors.on("click", $.proxy(this.getAuthors, this));
  this.$getBookByTitleBtn.on("click", $.proxy(this.getBookByTitle, this));
  this.$getBookByAuthor.on("click", $.proxy(this.getBookByAuthor, this));
  $('#dropDownBtn').on("click", $.proxy(this._addLi, this));
};

library.prototype._getAddBookInputs = function(){
  var _self=this;
  $.each($("li"), function(index, value){
    var title = $(this).children(".title").val();
    var author = $(this).children(".author").val();
    var pages = $(this).children(".pages").val();
    var date = $(this).children(".date").val();
    if(title && author && pages && date) {
      var book = new newBook(title, author, pages, date);
      _self.addBook(book);
    }
  });
};

function newBook (title, author, numberOfPages, publishDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
};


library.prototype.bookArray = [];

library.prototype.addBook = function(book){
  for(var i = 0; i < this.bookArray.length; i++){
  if  (this.bookArray[i].title == book.title) {
    return false;
  }
}
    this.bookArray.push(book);
    $("div.bookContainer").append("<li>" + book.title + " " + book.author + " " + book.numberOfPages + " " + book.publishDate + " " + "</li>");
    return true;
};

library.prototype.removeBookByTitle = function (title){
  var regEx = new RegExp(title, 'i');
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].title.match(regEx)) {
         this.bookArray.splice(i,1);
         $("div.bookContainer").remove(book.title);
         bool = true;


    }
  }
        return bool;
};

library.prototype.removeBookByAuthor = function (author){
  var regEx = new RegExp(author, 'i');
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].author.match(regEx)) {
         this.bookArray.splice(i,1);
         bool = true;

    }
  }
      return bool;
};

library.prototype.getRandomBook = function(){
  if  (this.bookArray.length) {
  var randomBook = this.bookArray[Math.floor(Math.random() * this.bookArray.length)];
  $("div.sideBookContainer").append("<li>" + randomBook.title + " " + randomBook.author + " " + randomBook.numberOfPages + " " + randomBook.publishDate +"</li>");
  return randomBook.title;
  }
    return null;
  };

library.prototype.getBookByTitle = function(title){
  var regEx = new RegExp(title, 'gi');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].title.match(regEx)){
        matchArray.push(this.bookArray[i]);
        $("div.sideBookContainer").append("<li>" + this.bookArray[i].title + " " + this.bookArray[i].author + " " + this.bookArray[i].numberOfPages + " " + this.bookArray[i].publishDate + "</li>");

    }
  }
  return matchArray;
};

library.prototype.getBookByAuthor = function(author){
  var regEx = new RegExp(author, 'gi');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].author.match(regEx)){
        matchArray.push(this.bookArray[i]);
        $("div.sideBookContainer").append("<li>" + this.bookArray[i].title + " " + this.bookArray[i].author + " " + this.bookArray[i].numberOfPages + " " + this.bookArray[i].publishDate + "</li>");
    }
  }
  return matchArray;
};

library.prototype.addBooks = function(array1){
var num = 0;
for(var i = 0; i < array1.length; i++){
  if (this.addBook(array1[i])){
    num++;
    }
  }
return num;
};

library.prototype.getAuthors = function(){
  var authorsArray = new Array;
  for(var i = 0; i < this.bookArray.length; i++){
    if (authorsArray.indexOf(this.bookArray[i].author) < 0){
     authorsArray.push(this.bookArray[i].author);
    }
  }
  $("div.sideBookContainer").append("<li>" + authorsArray + "</li>");
  return authorsArray;
};

library.prototype.getRandomAuthorName = function(){
  if  (this.bookArray.length > 0) {
  var randomBook = this.bookArray[Math.floor(Math.random() * this.bookArray.length)];
    $("div.sideBookContainer").append("<li>" + randomBook.author + "</li>");
    return randomBook;
    }
    return null;
  };


var gLibrary = new library();
gLibrary.init();
