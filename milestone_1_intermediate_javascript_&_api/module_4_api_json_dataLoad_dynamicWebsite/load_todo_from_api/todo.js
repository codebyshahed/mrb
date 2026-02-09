const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodos(data));
};

loadTodo();

// display todo
const displayTodos = (todos) => {
  // get the container
  const todoContainer = document.getElementById("toto_container");
  // empty the innerHtml
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="toto_card">
    <p>${todo.completed ? `<i class="fa-regular fa-circle-check"></i>` : `<i class="fa-regular fa-circle-xmark"></i>`}</p>
      <h4>${todo.title}</h4>
    </div>
    `;

    todoContainer.appendChild(div);
  });
};
