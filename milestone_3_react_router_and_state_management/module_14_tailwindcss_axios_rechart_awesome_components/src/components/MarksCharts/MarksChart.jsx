import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marks_data = marksDataRes.data;

  // data processing for the cart
  const marks_chart_data = marks_data.map((student_data) => {
    const student = {
      id: student_data.id,
      name: student_data.name,
      physics: student_data.marks.physics,
      chemistry: student_data.marks.chemistry,
      math: student_data.marks.math,
    };

    // make student avg marks
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg.toFixed(2);

    return student;
  });

  return (
    <div className="max-w-285 mx-auto px-4 py-10">
      <BarChart width={800} height={200} data={marks_chart_data}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Bar dataKey={"avg"} fill="#2dba4e" />
        <Bar dataKey={"chemistry"} fill="blue" />
        <Bar dataKey={"physics"} fill="red" />
      </BarChart>
    </div>
  );
};

export default MarksChart;
