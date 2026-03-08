const App = () => {
  return (
    <>
      <h1 className="text-center px-4 py-5 text-2xl text-zinc-300 bg-zinc-900">
        Ownist
      </h1>

      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default App;
