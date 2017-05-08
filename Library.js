
var library = function() {};

library.prototype.bookArray = [];

function newBook (title, author, numberOfPages, publishDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
};

var book1 = new newBook ("Catcher in the Rye","J.D Salinger", "214", "07-16-1951");
var book2 = new newBook ("East of Eden", "John Steinback", "500", "07-16-1951");
var book3 = new newBook ("To Kill a Mocking Bird", "Harper Lee", "281", "07-11-1960");
var book4 = new newBook ("1984", "George Orwell", "298", "06-08-1949");
var book5 = new newBook ("The Outsiders", "S.E Hinton", "192", "04-24-1967");
var book6 = new newBook ("Lord of the Flies", "William Golding", "182", "1963");
var book7 = new newBook ("Fahrenheit 451", "Ray Bradbury", "158", "1951");
var book8 = new newBook ("Atlas Shrugged", "Ayn Rand", "1088","1957");
var book9 = new newBook ("Catch 22", "Joseph Heller", "453", "11-10-1961");
var book10 = new newBook ("The Great Gatsby", "F. Scott Fitzgerald", "180", "04-10-1925");
var book11 = new newBook ("Breakfast at Tiffany's", "Truman Capote", "179", "1958");
var book12 = new newBook ("War and Peace", "Leo Tolstoy", "1225", "1869");
var book13 = new newBook ("Walden", "Henry David Thoreau", "320", "08-09-1954");


library.prototype.init=function(){
  this.$dropDown=$("#dropDown ul");
  this._bindEvents();
};

library.prototype._bindEvents = function(){
  $('#startBtn').on("click", $.proxy(this._setStartArray,this));
  $('#emptyLibBtn').on("click", $.proxy(this._emptyLib,this));
  $('#emptyGetBtn').on("click", $.proxy(this._emptyGet,this));
  $('#dropDownBtn').on("click", $.proxy(this._addLi, this));
  $('#deleteFormBtn').on("click", $.proxy(this._deleteLi, this));
  $('#addBookBtn').on("click", $.proxy(this._addBookInputs,this));
  $('#rmveByTitleBtn').on("click", $.proxy(this._rmveByTitleInputs,this));
  $('#rmveByAuthBtn').on("click", $.proxy(this._rmveByAuthInputs,this));
  $('#getByTitleBtn').on("click", $.proxy(this._getByTitleInputs,this));
  $('#getByAuthBtn').on("click", $.proxy(this._getByAuthInputs,this));
  $('#getRanBookBtn').on("click", $.proxy(this.getRandomBook,this));
  $('#getRanAuthBtn').on("click", $.proxy(this.getRandomAuthorName,this));
  $('#getAuthsBtn').on("click", $.proxy(this.getAuthors,this));
};


library.prototype._setStartArray = function(){
  var aBooks = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13]
    this.addBooks(aBooks)
  };

library.prototype._emptyLib = function(){
  $("form").remove();
    for(var i = 0; i < this.bookArray.length; i++){
      this.bookArray.splice(i,13);
    }
  };

library.prototype._emptyGet = function(){
  $('li.get').remove();
  };

library.prototype._addLi = function(){
  this.$dropDown.append("<li class='listGroupItem'><input type='text' class='title' placeholder='Title of Book'> <input type='text' class='author' placeholder='Author of Book'><input type='text' class='pages' placeholder='Number of Pages'><input type='text' class='date' placeholder='Publish Date'></li>")
}

library.prototype._deleteLi = function(){
  this.$dropDown.empty("li");
}

library.prototype._addBookInputs = function(){
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


library.prototype._rmveByTitleInputs = function(){
  var title = $("#rmveByTitleField").val();
   if(title) {
      this.removeBookByTitle(title);
    }
  };

library.prototype._rmveByAuthInputs = function(){
  var author = $("#rmveByAuthField").val();
    if(author) {
      this.removeBookByAuthor(author);
    }
  };

library.prototype._getByTitleInputs = function(){
  var title = $("#getByTitleField").val();
    if(title) {
      this.getBookByTitle(title);
    }

  };

library.prototype._getByAuthInputs = function(){
  var author = $("#getByAuthField").val();
    if(author) {
      this.getBookByAuthor(author);
    }
  };



library.prototype.addBooks = function(aBooks){
  var num = 0;
    for(var i = 0; i < aBooks.length; i++){
      if (this.addBook(aBooks[i])){
        num++;
        }
      }
        return num;
    };


library.prototype.addBook = function(book){
  for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].title == book.title) {
      return false;
      }
    }
      this.bookArray.push(book);
      $("#bookContainer").append("<form class=" + (book.title.split(' ').join('')) + " id=" + (book.author.split(' ').join('')) +">" + " " + book.title + " " + "<span>by</span>" + " " + book.author + "<span>,</span>" + " " + book.numberOfPages + "<span>,</span>" + " " + book.publishDate + "</form>");

      return true;
  };

library.prototype.removeBookByTitle = function (title){
  var title = $("#rmveByTitleField").val();
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].title == title) {
        this.bookArray.splice(i,1);
        $('form.'+title.split(' ').join('')+'').remove();
        bool = true;
        }
      }
        return bool;
    };

library.prototype.removeBookByAuthor= function (author){
  var author = $("#rmveByAuthField").val();
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].author == author) {
         this.bookArray.splice(i,1);
         $('form#'+author.split(' ').join('')+'').remove();
         bool = true;
        }
      }
        return bool;
    };

library.prototype.getBookByTitle = function(title){
  var regEx = new RegExp(title, 'gi');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].title.match(regEx)){
        matchArray.push(this.bookArray[i]);
        $("#sideBookContainer").append("<li class='get'>" + " " + this.bookArray[i].title + " " + "<span>by</span>" + " " + this.bookArray[i].author + "<span>,</span>" + " " + this.bookArray[i].numberOfPages + "<span>,</span>" + " " + this.bookArray[i].publishDate + " " + "</li>");
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
        $("#sideBookContainer").append("<li class='get'>" + " " + this.bookArray[i].title + " " + "<span>by</span>" + " " + this.bookArray[i].author + "<span>,</span>" + " " + this.bookArray[i].numberOfPages + "<span>,</span>" + " " + this.bookArray[i].publishDate + " " + "</li>");
    }
  }
  return matchArray;
};

library.prototype.getRandomBook = function(){
  if  (this.bookArray.length) {
  var randomBook = this.bookArray[Math.floor(Math.random() * this.bookArray.length)];
    $("#sideBookContainer").append("<li class='get'>" + " " + "<span>Random Book:</span>" + " " + randomBook.title + " " + "<span>by</span>" + " " + randomBook.author + "<span>,</span>" + " " + randomBook.numberOfPages + "<span>,</span>" + " " + randomBook.publishDate +"</li>");
    return randomBook.title;
  }
    return null;
};

library.prototype.getRandomAuthorName = function(){
  if  (this.bookArray.length > 0) {
  var randomBook = this.bookArray[Math.floor(Math.random() * this.bookArray.length)];
    $("#sideBookContainer").append("<li class='get'>" + " " + "<span>Random Author:</span>" + " " +  randomBook.author + "</li>");
    return randomBook;
  }
    return null;
};

library.prototype.getAuthors = function(){
  var authorsArray = new Array;
  for(var i = 0; i < this.bookArray.length; i++){
    if (authorsArray.indexOf(this.bookArray[i].author) < 0){
        authorsArray.push(" " + this.bookArray[i].author);
    }
  }
          $("#sideBookContainer").append("<li class='get'>" + " " + "<span>Authors:</span>" + " " + authorsArray + "</li>");
          return authorsArray;
};



var gLibrary = new library();
gLibrary.init();
