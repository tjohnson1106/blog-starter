import React, { useEffect, useState } from "react";
import axios from "axios";

import { PostForm } from "../components/PostForm";

export const Home = () => {
  // empty array -> changes value of post
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function editPost(post) {
    console.log(post);
  }

  function deletePost(id) {
    axios.delete(`/posts/${id}`).then(() => {
      const postsUpdated = posts.filter((p) => p.id !== id);
      setPosts(postsUpdated);
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col s6">
          <PostForm />
        </div>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col s6" key={post.id}>
            <div className="card">
              <div className="card-content">
                <div className="card-title">{post.title}</div>
                <p className="timestamp">{post.createdAt}</p>
                <p>{post.body}</p>
              </div>
              <div className="card-action">
                <a href="#" onClick={editPost.bind(null, post)}>
                  Edit
                </a>
                <a
                  href="#"
                  onClick={deletePost.bind(null, post.id)}
                  className="delete-btn"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
