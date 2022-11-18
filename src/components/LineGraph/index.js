import "../../styles/style.css"
import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
    {
      name: "Nov",
      uv: 100,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Dec",
      uv: 110,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Jan",
      uv: 78,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Feb",
      uv: 67,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Mar",
      uv: 167,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Api",
      uv: 97,
      pv: 3800,
      amt: 2500
    },
    {
      name: "May",
      uv: 108,
      pv: 4300,
      amt: 2100
    }
  ];

export default function App() {
  return (
    <AreaChart
      width={720}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  )
}
