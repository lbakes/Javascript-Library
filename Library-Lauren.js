var book1 = new newBook ("Catcher in the Rye","J.D Salinger", "214", "Little, Brown and Company");
var book2 = new newBook ("East of Eden", "John Steinback", "500", "Little, Brown and Company");
var book3 = new newBook ("To Kill a Mocking Bird", "Harper Lee", "281", "J. B. Lippencott & Co.");
var book4 = new newBook ("1984", "George Orwell", "298", "Secker & Warburg");
var book5 = new newBook ("The Outsiders", "S.E Hinton", "192", "Viking Press, Dell Publishing");

var book6 = new newBook ("Fahrenheit 451", "Ray Bradbury", "158", "Ballantine Books");
var book7 = new newBook ("Atlas Shrugged", "Ayn Rand", "1088", "Penguin Publishing Group");
var book8 = new newBook ("The Adventures of Huckleberry Finn", "Mark Twain", "465", "Public Domain");



function newBook (title, author, numberOfPages, publisher){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publisher = publisher;
};

var library = function() {};

library.prototype.otherArray = [];

library.prototype.bookArray = [];

// Purpose: Add a book object to your books array.
// Return: boolean true if it is not already added, false if it is already added.

library.prototype.addBook = function(book){
  for(var i = 0; i < this.bookArray.length; i++){
  if  (this.bookArray[i].title == book.title) {
    return false;
  }
}
    this.bookArray.push(book);
    this.bookArray.length++;
    return true;
};

// Purpose: Remove book from from the books array by its title.
// Return: boolean true if the book(s) were removed, false if no books match

library.prototype.removeBookByTitle = function (book){
  for(var i = 0; i < this.bookArray.length; i++){
  if  (this.bookArray[i].title == book.title) {

    this.bookArray.splice(i,1);
    this.bookArray.length--;
    return true;

  }
}
    return false;
};

// Purpose: Remove a specific book from your books array by the author name.
// Return: boolean true if the book(s) were removed, false if no books match

library.prototype.removeBookByAuthor = function (book){
  for(var i = 0; i < this.bookArray.length; i++){
  if  (this.bookArray[i].author == book.author) {

    this.bookArray.splice(i,1);
    this.bookArray.length--;
    return true;

  }
}
    return false;
};


// Purpose: Return a random book object from your books array
// Return: book object if you find a book, null if there are no books

library.prototype.getRandomBook = function(){
  if  (this.bookArray.length > 0) {
  var randomNum = Math.floor(Math.random() * this.bookArray.length);
  return this.bookArray[randomNum];
  }
    return null;
  };

// Purpose: Return all books that completely or partially matches the string title passed into the function
// Return: array of book objects if you find books with matching titles, empty array if no books are found

library.prototype.getBookByTitle = function(title){
  var splitBooks = [];
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    splitBooks.push(this.bookArray[i].title.split(' '));
    for(var j = 0; j < splitBooks.length; j++)
      if ( title == splitBooks[j]){
      matchArray.push(this.bookArray[i]);
    }
    return matchArray;
  }
};

// Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
// Return: array of books if you find books with match authors, empty array if no books match
//

library.prototype.getBooksByAuthor = function(){
  var splitBooks = [];
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    splitBooks.push(this.bookArray[i].title.split(' '));
    for(var j = 0; j < splitBooks.length; j++)
      if ( title == splitBooks[j]){
      matchArray.push(this.bookArray[i]);
    }
    return matchArray;
  }
};

// Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
// Return: number number of books successfully added, 0 if no books were added

library.prototype.addBooks = function(books){
for(var i = 0; i < this.books.length; i++){
    this.bookArray.push(books[i]);
}
  return 0;
};

// Purpose: Find the distinct authors’ names from all books in your library
// Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist

library.prototype.getAuthors = function(){
  var authorsArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    for (var j = 0; i < authorsArray.length; j++)
  if (bookArray.author !== authorsArray.author){
     authorsArray.push(this.bookArray[i].author);
    }
    return authorsArray;
  }
};

// Purpose: Retrieves a random author name from your books collection
// Return: string author name, null if no books exist

library.prototype.getRandomAuthorName = function(){
  if  (this.bookArray.length > 0) {
  var randomNum = Math.floor(Math.random() * this.bookArray.length);
  return this.bookArray[randomNum].author;
  }
    return null;
  };

  var gLibrary = new library();
