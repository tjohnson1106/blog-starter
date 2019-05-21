import React, { useState } from "react";

export function PostForm() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!loading ? (
        <form className="push-in">
          <div className="input-field">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value
              onChange={onChange}
              className="vaidate"
            />
          </div>
        </form>
      ) : (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      )}
    </>
  );
}
