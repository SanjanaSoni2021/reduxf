import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/features/postSlice";

function App() {

  const { posts, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <h2>Loading..</h2>
  }

  return (
    <div className="App">
      {posts.map((item) => (
        // <h2>{item.title}</h2>
        // <h2>{item.id}</h2>
        <ul key={item.userId} >
          {item.id}, <br />
          {item.title}
        </ul>
      ))}
    </div>
  );
}

export default App;