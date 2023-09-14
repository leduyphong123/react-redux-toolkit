import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBook,
  removeBook,
  selectBookDetail,
  selectBookRemoved,
  selectSuccess,
  setSuccess,
} from "../../features/book/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const bookDetail = useSelector(selectBookDetail);
  // const bookRemove = useSelector(selectBookRemoved);
  // const success = useSelector(selectSuccess);
  const getBookDetail = async () => {
    if (bookDetail == null) {
      dispatch(getBook(bookId));
    } else {
      setBook(bookDetail);
    }
  };
  useEffect(() => {
    getBookDetail();
  }, [bookId,bookDetail]);

  function getBooks() {
    navigate("/");
  }

  function removeBtn() {
    dispatch(removeBook(bookId));

    navigate("/");
  }

  return (
    <div>
      <h1>Book Details</h1>
      <p>
        <b>Id:</b> {book?.id}
      </p>
      <p>
        <b>Title:</b> {book?.title}
      </p>
      <p>
        <b>Quantity:</b> {book?.quantity}
      </p>
      <button type="button" onClick={getBooks}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeBtn}>
        Remove
      </button>
    </div>
  );
}

export default BookDetails;
