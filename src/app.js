import 'bulma/css/bulma.css';
import React from 'react';
import axios from 'axios';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList';
import { useState } from 'react';


const App = () => {
    const [Book, setBook] = useState([]);
    const editebyid = (id, newtitle) => {
        const updatebook = Book.map((book) => {
            if (book.id === id) {
                return { ...book, title: newtitle }
            }
            return book;
        });
        setBook(updatebook);
    }
    const deletebyId = (id) => {
        const updatebook = Book.filter((book) => {
            return book.id != id;
        });
        setBook(updatebook);
    }
    const createBook = async (book) => {
        const response = await axios.post('http://localhost:3001/books', {
            "title": book
        });
        console.log(response)
        const updatebook = [...Book, response.data];
        setBook(updatebook);

    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={Book} onDelete={deletebyId} onEdit={editebyid} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}
export default App;