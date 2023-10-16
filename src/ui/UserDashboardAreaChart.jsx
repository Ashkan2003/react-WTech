import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    Phyton: 0,
    Html: 0,
    Php: 1,
  },
  {
    name: "Monday",
    Phyton: 1,
    Html: 2,
    Php: 2,
  },
  {
    name: "Tuesday",
    Phyton: 1,
    Html: 1,
    Php: 1,
  },
  {
    name: "Wendesday",
    Phyton: 0,
    Html: 1,
    Php: 2,
  },
  {
    name: "Thursday",
    Phyton: 3,
    Html: 2,
    Php: 1,
  },
  {
    name: "Friday",
    Phyton: 0,
    Html: 3,
    Php: 1,
  },
  {
    name: "Saturday",
    Phyton: 1,
    Html: 3,
    Php: 5,
  },
];

function UserDashboardAreaChart() {
  return (
    <div className="text-grey-600 h-72 w-full rounded-lg bg-gray-50 p-3 dark:bg-gray-800 dark:text-white">
      <h1 className="text-center text-2xl text-gray-600 dark:text-white">
        Weekly watch time chart
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#9b9999" }}
            tickLine={{ stroke: "#9b9999" }}
          />
          <YAxis
            unit="h"
            tick={{ fill: "#9b9999" }}
            tickLine={{ stroke: "#9b9999" }}
          />
          <Tooltip contentStyle={{ backgroundColor: "#000000a4" }} />

          <Area
            type="monotone"
            dataKey="Phyton"
            stackId="1"
            stroke="#8884d8"
            unit="h"
          />
          <Area
            type="monotone"
            dataKey="Html"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            unit="h"
          />
          <Area
            type="monotone"
            dataKey="Php"
            stackId="1"
            stroke="#c0891c"
            fill="#c8e71d"
            unit="h"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserDashboardAreaChart;
