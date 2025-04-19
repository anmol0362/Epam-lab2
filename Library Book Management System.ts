interface Book {
    title: string;
    author: string;
    isBorrowed: boolean;
  }
  
  class Library {
    books: Book[] = [];
  
    addBook(book: Book) {
      this.books.push(book);
    }
  
    borrowBook(title: string) {
      const book = this.books.find(b => b.title === title && !b.isBorrowed);
      if (book) book.isBorrowed = true;
    }
  
    returnBook(title: string) {
      const book = this.books.find(b => b.title === title && b.isBorrowed);
      if (book) book.isBorrowed = false;
    }
  
    displayBooks() {
      console.log("Available:", this.books.filter(b => !b.isBorrowed));
      console.log("Borrowed:", this.books.filter(b => b.isBorrowed));
    }
  }
  
  // Example Usage
  const lib = new Library();
  lib.addBook({ title: "1984", author: "Orwell", isBorrowed: false });
  lib.borrowBook("1984");
  lib.displayBooks();
  lib.returnBook("1984");
  lib.displayBooks();
  