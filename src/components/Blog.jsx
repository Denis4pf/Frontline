// import React, { useState } from "react";
// import "./Blog.css";

// function Blog() {
//   const [posts, setPosts] = useState([]);

//   const addPost = (post) => {
//     setPosts([...posts, post]);
//   };

//   const deletePost = (index) => {
//     const newPosts = [...posts];
//     newPosts.splice(index, 1);
//     setPosts(newPosts);
//   };

//   const addComment = (index, comment) => {
//     const newPosts = [...posts];
//     newPosts[index].comments.push(comment);
//     setPosts(newPosts);
//   };

//   return (
//     <div className="Blog">
//       <h1>My Blog</h1>
//       <PostForm addPost={addPost} />
//       <div className="posts">
//         {posts.map((post, index) => (
//           <Post
//             key={index}
//             index={index}
//             post={post}
//             deletePost={deletePost}
//             addComment={addComment}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function PostForm({ addPost }) {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addPost({ title, body, comments: [] });
//     setTitle("");
//     setBody("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>New Post</h2>
//       <div>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="body">Body:</label>
//         <textarea
//           id="body"
//           value={body}
//           onChange={(event) => setBody(event.target.value)}
//         ></textarea>
//       </div>
//       <button type="submit">Post</button>
//     </form>
//   );
// }

// function Post({ index, post, deletePost, addComment }) {
//   const handleDelete = () => {
//     deletePost(index);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const comment = event.target.comment.value;
//     addComment(index, comment);
//     event.target.reset();
//   };

//   return (
//     <div className="post">
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//       <button onClick={handleDelete}>Delete</button>
//       <h3>Comments</h3>
//       <ul>
//         {post.comments.map((comment, index) => (
//           <li key={index}>{comment}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="comment">Add a comment:</label>
//           <input type="text" id="comment" />
//         </div>
//         <button type="submit">Comment</button>
//       </form>
//     </div>
//   );
// }

// export default Blog;


import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePostSubmit = () => {
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  const handlePostDelete = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <div className="blog-container">
      <h1>Welcome to our Blog!</h1>
      <div className="post-form">
        <h2>Write a New Post:</h2>
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
        <textarea placeholder="Content" value={content} onChange={handleContentChange} />
        <button onClick={handlePostSubmit}>Submit</button>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handlePostDelete(index)}>Delete</button>
          <div className="comments">
            {/* <h3>Comments:</h3> */}
            {/* Comment component here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
