import axios from "axios";

const BOOK_MANAGEMENT_API =
  "https://64fad191cb9c00518f7a3bd6.mockapi.io/api/v1";

export const findBooks = async () => {
  let result = null;
  try {
    result = await axios.get(`${BOOK_MANAGEMENT_API}/books`);
  } catch (e) {
    console.log("Find books API error: " + e);
  }
  return result;
};

export const findBook = async (bookId) => {
  let result = null;
  try {
    result = await axios.get(`${BOOK_MANAGEMENT_API}/books/${bookId}`);
  } catch (e) {
    console.log("Find book API error: " + e);
  }
  return result;
};

export const createBook = async (book) => {
  let result = null;
  try {
    result = await axios.post(`${BOOK_MANAGEMENT_API}/books`, book);
  } catch (e) {
    console.log("Find book API error: " + e);
  }
  return result;
};

export const updateBook = async (book) => {
  let result = null;
  try {
    result = await axios.put(`${BOOK_MANAGEMENT_API}/books/${book.id}`, book);
  } catch (e) {
    console.log("Update book API error: " + e);
  }
  return result;
};

export const deleteBook = async (bookId) => {
  let result = null;
  try {
    result = await axios.delete(`${BOOK_MANAGEMENT_API}/books/${bookId}`);
  } catch (e) {
    console.log("Delete book API error: " + e);
  }
  return result;
};
