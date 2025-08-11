# 📚 Book Management API - React Frontend

This is a simple **React.js** frontend application for managing books using a **Spring Boot REST API** with a **PostgreSQL** database.  
The app allows you to:
- Fetch all books from the backend
- Delete a specific book (which removes it from both the UI and the database)
- Add new books (via a linked page)

---

## 🚀 Features
- View a list of all books from the database
- Delete a book with one click ❌
- Automatic UI update after deletion
- Responsive design

---

## 🛠 Tech Stack
**Frontend**
- React.js
- Axios / Fetch API
- CSS for styling

**Backend**
- Spring Boot
- PostgreSQL

---

## 📂 Project Structure
```
src/
├── components/
│ └── BooksList.jsx
├── pages/
│ └── AddBook.jsx
├── App.js
├── index.js
└── BooksList.css
```

---

## ⚡ Getting Started

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- Backend API running at `http://localhost:8080`

### 2️⃣ Installation
Clone the repository and install dependencies:
```
git clone https://github.com/your-username/book-management-frontend.git
cd book-management-frontend
npm install
```
3️⃣ Running the App
Start the development server:

```
npm start
```
The app will run at http://localhost:3000

🔗 API Endpoints Used
Method	  Endpoint	        Description
GET	        /books	      Fetch all books
DELETE	   /books/{id}	  Delete book by ID

🖼 Preview

📜 License
This project is licensed under the MIT License.

💡 Notes
Ensure your backend (Spring Boot) is running before starting the frontend.

Adjust the API URL in BooksList.jsx if your backend runs on a different host/port.
