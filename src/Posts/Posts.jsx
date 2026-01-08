import { useLoaderData } from "react-router-dom";
import Post from "../components/Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1 className="font-bold">Posts !</h1>
      <p>Total Posts: {posts.length}</p>
      <div className="grid md: grid-cols-3 gap-4 mt-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
