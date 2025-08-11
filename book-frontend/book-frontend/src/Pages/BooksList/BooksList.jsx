import React, { useState, useEffect } from 'react'
import "./BooksList.css"
import axios from 'axios'

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/books")
            .then(response => {
                setBooks(response.data)
            })
            .catch(e => {
                console.log("There was an error when fetching the books", e)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/books/${id}`)
            .then(() => {
                setBooks(prevBooks => prevBooks.filter(book => book.id != id))
            })
            .catch(() => {
                alert("Failed to delete book !")
            })
    }

    return (
        <>
            <div className="book-app">
                <div className="container">
                    <h1 className='title'>Book Management API 📚</h1>
                    {books.length > 0 ? (
                        <ul>
                            {books.map(book => (
                                <li key={book.id}>
                                    <h3>{book.title} - {book.author}</h3>
                                    <p className='dlt' onClick={() => handleDelete(book.id)}>❌</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>No books found in the record.</h3>
                    )}
                </div>
                <p className='link'>Wanna add more books? <a href="/add-book">Click me</a></p>
            </div>
        </>
    )
}

export default BooksList
