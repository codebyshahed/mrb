/*
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
*/

/**
 * conditoinal redering using ternary operator (? :)
 */
// export default function Todo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <h1>
//       Done: {task}, Time: {time}
//     </h1>
//   ) : (
//     <h1>Pending: {task}</h1>
//   );
// }

/**
 * conditional redering using && operator
 */
// export default function Todo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <h1>
//         Complete: {task}, Time: {time}
//       </h1>
//     )
//   );
// }

/**
 * conditional redering using || operator
 */
// export default function Todo({ task, isDone }) {
//   return isDone || <h1>Pending: {task}</h1>;
// }

/**
 * conditional redering using variable
 */
export default function Todo({ task, isDone }) {
  let listItem;

  if (isDone) {
    listItem = (
      <div className="">
        <h2>Done: {task}</h2>
      </div>
    );
  } else {
    listItem = (
      <div className="">
        <h2>Pending: {task}</h2>
      </div>
    );
  }

  return listItem;
}
