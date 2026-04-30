import { use, useState } from "react";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import TasksProgress from "./components/TasksProgress";
import TicketsContainer from "./components/Tickets/TicketsContainer/TicketsContainer";
import TicketsStatus from "./components/Tickets/TicketsStatus/TicketsStatus";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const ticketsFetch = async () => {
  const res = await fetch("./data.json");
  return (await res).json();
};
const ticketsPromise = ticketsFetch();

const App = () => {
  const tickets = use(ticketsPromise);
  const [insProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [allTickets, setAllTickets] = useState(tickets);

  const handleTicketTaskStatus = (ticket) => {
    const findTicketId = insProgressTasks.find((item) => ticket.id === item.id);

    if (!findTicketId) {
      const pendingTicketstasks = [...insProgressTasks, ticket];
      setInProgressTasks(pendingTicketstasks);
      toast.success(`"${ticket.title}" In Progress`);
    } else {
      toast.error(`"${ticket.title}" Alrady In Progress`);
    }
  };

  const handleResolveTask = (task) => {
    const findId = insProgressTasks.filter((item) => task.id !== item.id);
    const findResolvedTicketId = allTickets.filter(
      (item) => task.id !== item.id,
    );
    const allResolvedTasks = [...resolvedTasks, task];

    setInProgressTasks(findId);
    toast.success(`"${task.title}" resolved`);
    setResolvedTasks(allResolvedTasks);
    setAllTickets(findResolvedTicketId);
  };

  return (
    <>
      <NavbarDesktop />
      <main className="max-w-360 mx-auto px-4">
        <TasksProgress
          resolvedTasks={resolvedTasks}
          insProgressTasks={insProgressTasks}
        />

        <section className="grid grid-cols-12 gap-y-8 lg:gap-x-8 mb-20">
          <TicketsContainer
            allTickets={allTickets}
            handleTicketTaskStatus={handleTicketTaskStatus}
          />
          <TicketsStatus
            resolvedTasks={resolvedTasks}
            handleResolveTask={handleResolveTask}
            insProgressTasks={insProgressTasks}
          />
        </section>
      </main>

      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
