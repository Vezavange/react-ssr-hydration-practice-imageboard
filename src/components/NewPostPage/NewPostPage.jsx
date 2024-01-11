import axios from 'axios';
import React, { useState } from 'react';

export default function AddBookPage() {
  const [input, setInput] = useState({
    title: '',
    text: '',
  });
  const [image, setImage] = useState(null);

  const changeHandler = (event) => {
    if (event.target.name === "img") {
      setImage(event.target.files[0]);
    }
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', input.title);
    formData.append('text', input.text);

    const response = await axios.post('/api/addpost', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200) {
      window.location = '/';
    }
  };

  return (
    <div className="card-login">
      <div className="form-container d-flex min-vh-100 justify-content-center align-items-center">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              name="title"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Title"
              onChange={changeHandler}
              value={input.title}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="img"
              type="file"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Add Image"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="text"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Text"
              onChange={changeHandler}
              value={input.text}
              required
            />
          </div>
          <button type="submit" className="addbtn-login">
            Add post
          </button>
        </form>
      </div>
    </div>
  );
}