
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
  book7,
  book8,
  book9
]

function newBook (title, author, numberOfPages, publishDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = publishDate;
};

// (book1.publishDate.toLocaleDateString('en-US'));

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
  var regEx = new RegExp(title, 'i');
  var bool = false;
    for(var i = 0; i < this.bookArray.length; i++){
    if  (this.bookArray[i].title.match(regEx)) {
         this.bookArray.splice(i,1);
         bool = true;

    }
  }
        return bool;
};

// Purpose: Remove a specific book from your books array by the author name.
// Return: boolean true if the book(s) were removed, false if no books match

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
  var regEx = new RegExp(title, 'i');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].title.match(regEx)){
        matchArray.push(this.bookArray[i]);
    }
  }
  return matchArray;
};

// Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
// Return: array of books if you find books with match authors, empty array if no books match

library.prototype.getBookByAuthor = function(author){
  var regEx = new RegExp(author, 'i');
  var matchArray = [];
  for(var i = 0; i < this.bookArray.length; i++){
    if(this.bookArray[i].author.match(regEx)){
        matchArray.push(this.bookArray[i]);
    }
  }
  return matchArray;
};

// Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
// Return: number of books successfully added, 0 if no books were added

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
