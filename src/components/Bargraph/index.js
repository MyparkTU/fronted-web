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
    name: "หลัง class cafe",
    car: 32,
  },
    {
    name: "คณะวิศวะ (โยธา)",
    car: 32,
  },
  {
    name: "หลังโรงอาหาร sc",
    car: 47,
  },
  {
    name: "หน้ายิม 7",
    car: 38,
  },
  {
    name: "หลังยิม 7 *ฝั่งสนามฟุตซอล",
    car: 73,
  },
  {
    name: "ข้าง บร. 5",
    car: 54,
  },
  {
    name: "ตรงข้าม บร.4",
    car: 41,
  },
  {
    name: "หลังคณะวารสาร",
    car: 23,
  },
  {
    name: "อาคารเรียนรวมสังคมศาสตร์(SC)",
    car: 54,
  },
  {
    name: "ข้างคณะวิศวะ-โรงอาหารJC",
    car: 41,
  },
  {
    name: "คณะวิศวะ (ยานยนต์)",
    car: 23,
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
      <Bar dataKey="car" stackId="a" fill="#467FCF" />
    </BarChart>
  );
}
