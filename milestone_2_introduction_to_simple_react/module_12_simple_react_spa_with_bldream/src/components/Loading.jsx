import loading from "./../assets/loading.gif";

const Loading = () => {
  return (
    <div className="w-full mx-auto text-center flex flex-col items-center justify-center gap-y-4 px-4 py-5">
      <img width={80} src={loading} alt="loading" />
      <h1 className="text-xl text-neutral-900/80">Loading...</h1>
    </div>
  );
};

export default Loading;
