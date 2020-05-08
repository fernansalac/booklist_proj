import React, { createContext, useState } from 'react';
//install and import react uuid to generate a random id
import uuid from 'react-uuid';

//create a context
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
        { title: 'the final empire', author: 'brandon sanderson', id: 2 }
    ])

    const addBook = (newTitle, newAuthor) => {
        //spread the book list and add a new book
        setBooks([...books, { title: newTitle, author: newAuthor, id: uuid() }])
    }

    //delete book function
    const removeBook = (id) => {
        //filter the book list and delete the book matched with id parameter
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;