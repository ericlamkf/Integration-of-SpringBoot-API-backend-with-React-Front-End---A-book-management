import React, { useState } from 'react'
import "./AddBook.css"
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://www.localhost:8080/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, author })
        })
            .then(response => {
                if (response.ok) {
                    navigate("/")
                }
                else
                    alert("Failed to add book.")
            })
    }

    return (
        <div className='add-app'>
            <h3 className='title-add'>Add Book ✏️</h3>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='Enter the title of the book' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="author">Author</label>
                    <input type="text" placeholder='Enter the name of the author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <br />
                <button type='submit'>ADD BOOK</button>
            </form>
        </div>
    )
}

export default AddBook
