import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./layouts/Navbar.js";
import BooksView from "./features/books/BooksView.js";
import AddBook from "./features/books/AddBook.js";
import EditBook from "./features/books/EditBook.js";
import "./App.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook />} />
                    <Route path="*" element={<>Error Page</>} />
                </Routes>
            </main>
            <footer>
                <>
                    <h3>Sayedul Karim</h3>
                </>
            </footer>
        </div>
    );
};

export default App;
