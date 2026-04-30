import { loading } from "../assets";

const Loading = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center text-center space-y-4">
      <img width={100} src={loading} alt="loading" />
      <h1 className="text-2xl text-slate-700">Loading...</h1>
    </div>
  );
};

export default Loading;
