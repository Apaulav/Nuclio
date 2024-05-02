const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name72'
    }
  ]

const getTheTitles = function(books) {
    let getBooks = []
    getBooks = books.map((book) =>  book.title)
    //console.log("books: ", getBooks)
    return getBooks

};

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
