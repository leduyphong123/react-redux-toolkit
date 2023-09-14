import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  addBook,
  setSuccess,
  selectBookAdded,
  selectSuccess,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function BookAdd() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const isCreate = !bookId;
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const bookAdd = useSelector(selectBookAdded);
  const success = useSelector(selectSuccess);

  function handleChange(event) {
    setBook({...book,[event.target.name]:event.target.value})
  }

  function handleSubmit() {
    if(!success){
      dispatch(addBook(book));
    }else{
      dispatch(success(false));
    }
      navigate("/");
  }

  return (
    <div>
      <h1>Book Add</h1>
      <form>
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
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
