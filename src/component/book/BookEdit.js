import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {
  getBook,
  editBook,
  selectBookDetail,
  selectBookEdited,
  selectSuccess,
  setValue
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function BookEdit() {
  
  const { bookId } = useParams();
  const isCreate = !bookId;
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const bookDetail = useSelector(selectBookDetail);

  const getBookDetail = async () =>{
    if (bookDetail == null) {
      dispatch(getBook(bookId));
    } else {
      setBook(bookDetail);
    }
  }
  useEffect(() => {
    getBookDetail();
    return () =>{
      if(JSON.stringify(book) !=='{}')
       dispatch(setValue(null));
    }
  }, [bookId,bookDetail]);

  function handleChange(event) {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editBook(book));
    navigate("/");
  }

  function getBooks() {
    navigate("/");
  }

  return (
    <div>
      <h1>Book Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input
            readOnly
            name="id"
            value={book.id || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={book.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={book.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBooks}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
