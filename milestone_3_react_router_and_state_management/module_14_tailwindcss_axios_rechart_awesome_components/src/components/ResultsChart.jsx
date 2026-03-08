import { Line, LineChart, XAxis, YAxis } from "recharts";

// data
const resultData = [
  {
    id: 101,
    name: "Arif Ahmed",
    physics: 82,
    chemistry: 75,
    math: 88,
  },
  {
    id: 102,
    name: "Sultana Razia",
    physics: 45,
    chemistry: 52,
    math: 40,
  },
  {
    id: 103,
    name: "Tanvir Hasan",
    physics: 95,
    chemistry: 91,
    math: 98,
  },
  {
    id: 104,
    name: "Nusrat Jahan",
    physics: 33,
    chemistry: 41,
    math: 28,
  },
  {
    id: 105,
    name: "Rakib Hossain",
    physics: 68,
    chemistry: 72,
    math: 65,
  },
  {
    id: 106,
    name: "Mehedi Hasan",
    physics: 85,
    chemistry: 80,
    math: 90,
  },
  {
    id: 107,
    name: "Sadia Islam",
    physics: 29,
    chemistry: 35,
    math: 22,
  },
  {
    id: 108,
    name: "Fahim Muntasir",
    physics: 60,
    chemistry: 58,
    math: 64,
  },
  {
    id: 109,
    name: "Lamia Akter",
    physics: 78,
    chemistry: 84,
    math: 81,
  },
  {
    id: 110,
    name: "Zubair Bin Walid",
    physics: 92,
    chemistry: 89,
    math: 94,
  },
];

const ResultsChart = () => {
  return (
    <div className="">
      <LineChart width={500} height={200} data={resultData}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Line dataKey="physics" stroke="red" />
        <Line dataKey={"chemistry"} stroke="green" />
        <Line dataKey={"math"} stroke="blue" />
      </LineChart>
    </div>
  );
};

export default ResultsChart;
