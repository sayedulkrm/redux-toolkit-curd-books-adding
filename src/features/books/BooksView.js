import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
    const dispatch = useDispatch();

    const books = useSelector((state) => state.booksReducer.books);

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <h1>All Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books &&
                        books.map((book) => {
                            const { id, title, author } = book;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link
                                            to={`/edit-book`}
                                            state={{ id, title, author }}
                                        >
                                            <button>Edit</button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleDelete(id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;
