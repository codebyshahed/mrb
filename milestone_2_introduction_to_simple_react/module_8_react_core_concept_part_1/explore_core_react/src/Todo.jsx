export default function Todo({ task, isDone }) {
  if (isDone) {
    return (
      <div className="">
        <h2>Done: {task}</h2>
      </div>
    );
  } else {
    return (
      <div className="">
        <h2>Pending: {task}</h2>
      </div>
    );
  }
}
