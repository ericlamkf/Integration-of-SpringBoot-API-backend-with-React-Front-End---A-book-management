import { Routes, Route } from 'react-router-dom'
import BooksList from './Pages/BooksList/BooksList'
import AddBook from './Pages/AddBook/AddBook'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BooksList />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
      </Routes>
    </>
  )
}

export default App
