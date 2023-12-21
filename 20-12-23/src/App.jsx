import { useState, useEffect } from "react";
import AddPost from "./components/addPost";
import PostList from "./components/postList";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);
  const [userListData, setUserListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostListData(data.posts));
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUserListData(data.users));
  }, []);

  return (
    <div className="App">
      <AddPost setPostListData={setPostListData} />
      <PostList postListData={postListData} userListData={userListData} />
    </div>
  );
}

export default App;
