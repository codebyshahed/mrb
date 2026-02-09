const data = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const res = await fetch(url);
  console.log("hello");
  const data = await res.json();
  console.log(data);

  console.log(true);
};

data();
