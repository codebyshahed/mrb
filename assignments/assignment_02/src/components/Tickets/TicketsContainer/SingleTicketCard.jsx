import { Calendar } from "lucide-react";

const SingleTicketCard = ({ ticket, handleTicketTaskStatus }) => {
  const handleStatusChange = (ticket) => {
    handleTicketTaskStatus(ticket);
  };

  return (
    <div
      onClick={() => handleStatusChange(ticket)}
      className="bg-white rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border border-transparent cursor-pointer duration-200 hover:border-gray-400/40"
    >
      <div className="px-4 py-5 space-y-2">
        <div className="space-y-2 lg:space-y-0 lg:flex flex-row items-center justify-between">
          <h1 className="text-slate-900 text-lg font-medium line-clamp-1">
            {ticket.title}
          </h1>

          <div
            className={`inline-flex items-center gap-x-1.5 ${ticket.status.split(" ").join("") === "InProgress" ? "text-yellow-700" : "text-green-900"} text-base font-medium px-3 py-1 ${ticket.status.split(" ").join("") === "InProgress" ? "bg-yellow-100" : "bg-green-200"} rounded-full`}
          >
            <span
              className={`size-4 ${ticket.status.split(" ").join("") === "InProgress" ? "bg-yellow-400" : "bg-green-600"} rounded-full`}
            ></span>
            {ticket.status}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 text-base font-normal line-clamp-4 sm:line-clamp-2">
            {ticket.description}
          </p>

          <div className="space-y-2 lg:space-y-0 lg:flex items-center justify-between">
            <div className="lg:flex items-center gap-x-4">
              <span className="text-slate-500 text-sm font-medium">
                #{ticket.id}
              </span>
              <p
                className={`text-sm ${ticket.priority.split(" ").join("") === "HIGHPRIORITY" ? "text-red-500" : ticket.priority.split(" ").join("") === "MEDIUMPRIORITY" ? "text-yellow-400" : "text-green-600"} font-medium`}
              >
                {ticket.priority}
              </p>
            </div>

            <div className="lg:flex items-center gap-x-4">
              <span className="text-sm text-slate-500 font-normal">
                {ticket.customer}
              </span>
              <p className="flex items-center gap-x-1 text-slate-500">
                <Calendar size={20} />
                <span>{ticket.createdAt}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicketCard;
