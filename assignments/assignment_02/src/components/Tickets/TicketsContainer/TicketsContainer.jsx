import TicketCards from "./TicketCards";

const TicketsContainer = ({ handleTicketTaskStatus, allTickets }) => {
  return (
    <>
      <div className="col-span-full lg:col-span-8">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-slate-700 text-xl sm:text-2xl font-semibold">
              Customer Tickets
            </h1>
          </div>

          {/* tickets cards */}
          <TicketCards
            handleTicketTaskStatus={handleTicketTaskStatus}
            allTickets={allTickets}
          />
        </div>
      </div>
    </>
  );
};

export default TicketsContainer;
