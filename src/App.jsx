import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  }

  return (
    <div>
      <h1>Posts</h1>
      {
        posts ? (
          <ul>
            {
              posts && posts.map(post => (
                <li key={post.id}>{ post.title }</li>
              ))
            }
          </ul>
        ) : (
          <p>Fetching Data...</p>
        )
      }
    </div>
  )
}

export default App;