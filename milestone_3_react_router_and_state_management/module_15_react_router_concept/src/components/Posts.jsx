import { use } from "react";

const Posts = ({ postsPromise }) => {
  const postData = use(postsPromise);
  console.log(postData);

  return (
    <div>
      <h1>All Posts</h1>
    </div>
  );
};

export default Posts;
