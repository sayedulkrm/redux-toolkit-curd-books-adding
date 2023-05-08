import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);

    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        const textData = title.trim() || author.trim();
        if (!textData) {
            return;
        }

        dispatch(updateBook({ id, title, author }));
        navigate("/show-books");
    };

    return (
        <div>
            <h1>Edit Book</h1>

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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;
