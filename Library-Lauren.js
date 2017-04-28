

var library = function() {};

var book1 = new newBook ("Catcher in the Rye","J.D Salinger", "214", "Little, Brown and Company");
var book2 = new newBook ("East of Eden", "John Steinback", "500", "Little, Brown and Company");
var book3 = new newBook ("To Kill a Mocking Bird", "Harper Lee", "281", "J. B. Lippencott & Co.");
var book4 = new newBook ("1984", "George Orwell", "298", "Secker & Warburg");
var book5 = new newBook ("The Outsiders", "S.E Hinton", "192", "Viking Press, Dell Publishing");

var book6 = new newBook ("Fahrenheit 451", "Ray Bradbury", "158", "Ballantine Books");
var book7 = new newBook ("Atlas Shrugged", "Ayn Rand", "1088", "Penguin Publishing Group");
var book8 = new newBook ("The Adventures of Huckleberry Finn", "Mark Twain", "465", "Public Domain");

var aBooks = [
  book6,
  book7,
  book8
]

function newBook (title, author, numberOfPages, publisher){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publisher = publisher;
};

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
    return true;
};

// Purpose: Remove book from from the books array by its title.
// Return: boolean true if the book(s) were removed, false if no books match

library.prototype.removeBookByTitle = function (title){
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].title == title) {
         this.bookArray.splice(i,1);
         bool = true;

    }
  }
      return bool;
};

// Purpose: Remove a specific book from your books array by the author name.
// Return: boolean true if the book(s) were removed, false if no books match

library.prototype.removeBookByAuthor = function (author){
var bool = false;
  for(var i = 0; i < this.bookArray.length; i++){
  if  (this.bookArray[i].author == author) {
       this.bookArray.splice(i,1);
       bool = true;

  }
}
    return bool;
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
  var regEx = new RegExp(title, 'gi');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].title.match(regEx)){
        matchArray.push(this.bookArray[i]);
    }
    return matchArray;
}
};

// Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
// Return: array of books if you find books with match authors, empty array if no books match
//

library.prototype.getBooksByAuthor = function(author){
  var regEx = new RegExp(author, 'gi');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].author.match(regEx)){
        matchArray.push(this.bookArray[i]);
    }
    return matchArray;
}
};

// Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
// Return: number number of books successfully added, 0 if no books were added

library.prototype.addBooks = function(array1){
var num = 0;
for(var i = 0; i < array1.length; i++){
  if (this.addBook(array1[i])){
    num++;
  }
}
return num;
};
// Purpose: Find the distinct authors’ names from all books in your library
// Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist

library.prototype.getAuthors = function(){
  var authorsArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if (authorsArray.indexOf(this.bookArray[i].author) < 0){
     authorsArray.push(this.bookArray[i].author);
    }
  }
  return authorsArray;
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
