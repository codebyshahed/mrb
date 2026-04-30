import { vector_right, vectorLeft } from "../assets";

const TasksProgress = ({ insProgressTasks, resolvedTasks }) => {
  return (
    <>
      <div className="my-8 sm:my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-linear-to-br from-violet-700 to-purple-500 overflow-hidden rounded-lg relative">
          <img
            src={vector_right}
            className="hidden sm:inline-flex absolute bottom-0 right-0 h-full w-auto pointer-events-none"
            alt="vector"
          />
          <img
            src={vectorLeft}
            className="hidden sm:inline-flex absolute top-0 left-0 h-full w-auto pointer-events-none"
            alt="vector"
          />
          <div className="px-4 py-15 text-center space-y-4">
            <h3 className="text-white text-2xl font-normal">In Progress</h3>
            <h1 className="text-white text-6xl font-semibold">
              {insProgressTasks.length}
            </h1>
          </div>
        </div>

        <div className="bg-linear-to-l from-green-400 to-teal-700 overflow-hidden rounded-lg relative">
          <img
            src={vector_right}
            className="hidden sm:inline-flex absolute bottom-0 right-0 h-full w-auto pointer-events-none"
            alt="vector"
          />
          <img
            src={vectorLeft}
            className="hidden sm:inline-flex absolute top-0 left-0 h-full w-auto pointer-events-none"
            alt="vector"
          />
          <div className="px-4 py-15 text-center space-y-4">
            <h3 className="text-white text-2xl font-normal">Resolved</h3>
            <h1 className="text-white text-6xl font-semibold">
              {resolvedTasks.length}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksProgress;
