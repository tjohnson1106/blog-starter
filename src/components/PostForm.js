import React, { useState, useEffect } from "react";
import axios from "axios";

export function PostForm({ addPost, editingPost }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setPost(editingPost);
  }, [editingPost]);

  const _onChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    const tempErrors = {};

    if (post.title.trim() === "Title must not be empty") {
      tempErrors.title = true;
    }

    if (post.body.trim() === "Body must not be empty") {
      tempErrors.body = true;
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return false;
    }

    return true;
  };

  const _onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setErrors({});

    if (post.id) {
      axios
        .put(`/post/${post.id}`, post)
        .then((res) => {
          addPost(res.data);
          setPost({ title: "", body: "" });
          setLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post("/post", post)
        .then((res) => {
          addPost(res.data);
          setPost({ title: "", body: "" });
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      {!loading ? (
        <form className="push-in" onSubmit={_onSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={_onChange}
              className={errors.title && "invalid"}
            />

            <span className="text-helper">{errors.title}</span>
          </div>
          <div className="input-field">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              name="body"
              value={post.body}
              onChange={_onChange}
              className={errors.body && "invalid"}
            />
            <span className="text-helper">{errors.body}</span>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            {post.id ? "Update" : "Add"}
          </button>
        </form>
      ) : (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      )}
    </>
  );
}
