import "../../styles/style.css"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
   {
    name: "Page A",
    pv: 32,
    amt: 2400
  },
    {
    name: "Page A",
    pv: 32,
    amt: 2400
  },
  {
    name: "Page B",
    pv: 47,
    amt: 2210
  },
  {
    name: "Page C",
    pv: 38,
    amt: 2290
  },
  {
    name: "Page D",
    pv: 73,
    amt: 2000
  },
  {
    name: "Page E",
    pv: 54,
    amt: 2181
  },
  {
    name: "Page F",
    pv: 41,
    amt: 2500
  },
  {
    name: "Page G",
    pv: 23,
    amt: 2100
  },
  {
    name: "Page E",
    pv: 54,
    amt: 2181
  },
  {
    name: "Page F",
    pv: 41,
    amt: 2500
  },
  {
    name: "Page G",
    pv: 23,
    amt: 2100
  },
  {
    name: "Page F",
    pv: 41,
    amt: 2500
  },
  {
    name: "Page G",
    pv: 23,
    amt: 2100
  }
];

export default function App() {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
    </BarChart>
  );
}
