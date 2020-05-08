import React, { createContext, useReducer } from 'react';
//install and import react uuid to generate a random id
import uuid from 'react-uuid';
import { bookReducer } from '../reducers/bookReducer';

//create a context
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);

    return (
        <BookContext.Provider value={{ books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;