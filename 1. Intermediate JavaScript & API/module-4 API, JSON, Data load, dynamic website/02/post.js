const loadAllPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayAllPosts(data);
    });
};

const displayAllPosts = (posts) => {
  /*
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
  }
    */
  /*
  for (const post of posts) {
    console.log(post);
  }
    */

  posts.forEach((post) => {
    // get the container
    const postContainer = document.getElementById("post_container");
    // console.log(postContainer);

    // create an element
    const li = document.createElement("li");
    li.innerText = post.title;

    // append child
    postContainer.appendChild(li);
  });
};
