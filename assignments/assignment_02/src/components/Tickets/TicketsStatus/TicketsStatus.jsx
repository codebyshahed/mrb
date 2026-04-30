import ResolvedTasks from "./ResolvedTasks";
import SingleTicketStatusCard from "./SingleTicketStatusCard";

const TicketsStatus = ({
  insProgressTasks,
  handleResolveTask,
  resolvedTasks,
}) => {
  return (
    <>
      <div className="col-span-full lg:col-span-4">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-slate-700 text-2xl font-semibold">
              Task Status
            </h1>

            <div className="">
              {insProgressTasks.length === 0 ? (
                <p className="text-gray-500 text-base font-normal">
                  Select a ticket to add to Task Status
                </p>
              ) : (
                <div className="space-y-4">
                  {insProgressTasks.map((item, index) => (
                    <SingleTicketStatusCard
                      handleResolveTask={handleResolveTask}
                      item={item}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </div>

            {/*  */}
          </div>

          <div className="space-y-4">
            <h1 className="text-slate-700 text-2xl font-semibold">
              Resolved Task
            </h1>

            <div className="">
              {resolvedTasks.length === 0 ? (
                <p className="text-gray-500 text-base font-normal">
                  No resolved tasks yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {resolvedTasks.map((task, index) => (
                    <ResolvedTasks task={task} key={index} />
                  ))}
                </div>
              )}
            </div>

            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default TicketsStatus;
