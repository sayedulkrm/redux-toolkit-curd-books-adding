import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const numberOfBooks = useSelector(
        (state) => state.booksReducer.books.length
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const textData = title.trim() || author.trim();
        if (!textData) {
            return;
        }

        const book = { id: numberOfBooks + 1, title, author };
        dispatch(addBook(book));
        setTitle("");
        setAuthor("");
        navigate("/show-books");
    };

    return (
        <div>
            <h1>Add Book</h1>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
                onSubmit={handleSubmit}
            >
                <div className="form-field">
                    <label>Title:</label>

                    <input
                        type="text"
                        placeholder="Enter your book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-field">
                    <label>Author:</label>

                    <input
                        type="text"
                        placeholder="Enter your Author Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
