import "../../styles/style.css"
import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
    {
      name: "Nov",
      car: 30,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Dec",
      car: 21,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Jan",
      car: 38,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Feb",
      car: 47,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Mar",
      car: 51,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Api",
      car: 73,
      pv: 3800,
      amt: 2500
    },
    {
      name: "May",
      car: 50,
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
      <Area type="monotone" dataKey="car" stroke="#06D6A0" fill="#06D6A0" />
    </AreaChart>
  )
}
