import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState(null);

  // runs on every render of the component (infinite loop)
  // useEffect(() => {
  //   fetchPosts();
  // });

  // runs only once when the component is mounted
  useEffect(() => {
    console.log('fetching data...');
    fetchPosts();
  }, []);

  // runs when the component is mounted and when the posts state changes
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