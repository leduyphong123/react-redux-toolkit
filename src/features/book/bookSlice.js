import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findBooks,
  findBook,
  createBook,
  updateBook,
  deleteBook,
} from "../../api/bookAPI";

const initialState = {
  values: null,
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getBooks = createAsyncThunk("book/list", async () => {
  const response = await findBooks();
  return response.data;
});

export const getBook = createAsyncThunk("book/detail", async (bookId) => {
  const response = await findBook(bookId);
  return response.data;
});

export const addBook = createAsyncThunk("book/create", async (book) => {
  const response = await createBook(book);
  return response.data;
});

export const editBook = createAsyncThunk("book/edit", async (book) => {
  const response = await updateBook(book);
  return response.data;
});

export const removeBook = createAsyncThunk("book/remove", async (bookId) => {
  const response = await deleteBook(bookId);
  return response.data;
});

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Update states of get books action
      .addCase(getBooks.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })

      //Update states of get book action
      .addCase(getBook.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of add book action
      .addCase(addBook.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of edit book action
      .addCase(editBook.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editBook.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of remove book action
      .addCase(removeBook.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = bookSlice.actions;

export const selectLoading = (state) => state.book.loading;
export const selectError = (state) => state.book.error;
export const selectSuccess = (state) => state.book.success;
export const selectBookList = (state) => state.book.values;
export const selectBookDetail = (state) => state.book.value;
export const selectBookAdded = (state) => state.book.value;
export const selectBookEdited = (state) => state.book.value;
export const selectBookRemoved = (state) => state.book.value;

//Enhancement feature of book slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
  const currentValue = selectLoading(getState());
  if (currentValue === isCalled) {
    dispatch(setLoading(true));
  }
};

export default bookSlice.reducer;
