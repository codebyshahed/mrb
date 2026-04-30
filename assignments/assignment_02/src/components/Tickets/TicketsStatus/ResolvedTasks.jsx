const ResolvedTasks = ({ task }) => {
  return (
    <div className="">
      <h1 className="text-slate-900 text-lg font-medium px-4 py-5 bg-indigo-100 rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
        {task.title}
      </h1>
    </div>
  );
};

export default ResolvedTasks;
