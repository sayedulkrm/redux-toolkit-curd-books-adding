const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
    books: [
        { id: 1, title: "Book 1", author: "Author 1" },
        { id: 2, title: "Book 2", author: "Author 2" },
    ],
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => {
            return state;
        },

        addBook: (state, action) => {
            state.books.push(action.payload);
        },

        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
    },
});

export const { showBooks, addBook, deleteBook, updateBook } =
    booksSlice.actions;
export default booksSlice.reducer;
