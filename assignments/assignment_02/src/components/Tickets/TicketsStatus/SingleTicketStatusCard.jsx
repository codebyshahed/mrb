const SingleTicketStatusCard = ({ item, handleResolveTask }) => {
  return (
    <div className="bg-white rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
      <div className="p-4 space-y-4">
        <h1 className="text-slate-900 text-lg font-medium">{item.title}</h1>
        <button
          onClick={() => handleResolveTask(item)}
          className="w-full text-white text-base font-semibold px-4 py-3 bg-green-600 rounded duration-200 hover:bg-green-700"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default SingleTicketStatusCard;
