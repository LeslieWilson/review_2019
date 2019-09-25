import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';

const App = (props) => {
  const [books, setBooks] = useState([])

 const addBook=(formPayload)=>{
    fetch('/api/v1/books.json',{
        method:'POST',
        body: JSON.stringify(formPayload)
    })
    .then(response =>{
        if(response.ok){
            return response;
        }else{
            let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
            throw(error);
        }
    })
    .then(response => response.json())
    .then(body =>{
        setBooks([
            ...books,
            body.book])
    })
    .catch(error => console.error(`error in fetch ${error.message}`));
  }

  useEffect(() => {
      fetch('/api/v1/books.json')
      .then(response => {
          if(response.ok){
              return response;
          } else {
              let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
              throw(error);
          }
      })

      .then(response => response.json())
      .then(body => {
          let booksList = body.books;
          setBooks(booksList);
      })
      .catch(error => console.error(`error in fetch: ${error.message}`), [])iuz

  })

  const bookListItems = books.map(book => {
    return <li key={book.id}>{book.name}</li>;
  });

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {bookListItems}
      </ul>
      <BookForm addBook={addBook} />
    </div>
  );
}

export default App;
