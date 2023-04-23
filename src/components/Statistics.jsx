import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { assignment: "A1", value: 50 },
  { assignment: "A2", value: 53 },
  { assignment: "A3", value: 55 },
  { assignment: "A4", value: 57 },
  { assignment: "A5", value: 56 },
  { assignment: "A6", value: 57 },
  { assignment: "A7", value: 51 },
  { assignment: "A8", value: 52 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#00FF00",
  "#FF0000",
  "#FC9120",
];

const Statistics = () => {
  return (
    <>
      <h1 className="text-5xl py-4 text-center font-sans font-bold tracking-tight text-gray-800">
        Assignment Grades
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="assignment"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
