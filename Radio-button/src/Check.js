import React, { useState, useEffect } from "react";
import axios from "axios";

const Check = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);
  console.log(posts);

  return <div>check</div>;
};

export default Check;
