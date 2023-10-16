/* eslint-disable react/prop-types */
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// the data that we will send to pie chart must be like this fo we get userDashboardCourses and set a map on it and create this array of obj
// const dataEzample = [ 
//     { name: "Frontend", value: 400, color: "#84cc16" },
//     { name: "Backend", value: 300, color: "#3b82f6" },
//     { name: "Design", value: 300, color: "#14b8a6" },
//   ];

const data01 = [
  { name: "Frontend", value: 400, color: "#84cc16" },
  { name: "Backend", value: 300, color: "#3b82f6" },
  { name: "Design", value: 300, color: "#14b8a6" },
];

function UserDashboardPieChart({userDashboardCourses}) {
  const data = [];

  userDashboardCourses.map((course) =>
    data.push({
      name: course.courseName,
      value: course.courseHour,
      color:
        (course.courseHour <= 10 && "#84cc16") ||
        (course.courseHour <= 15 && "#14b8a6") ||
        (course.courseHour <= 20 && "#3b82f6") ||
        (course.courseHour <= 21 && "#339763") ||
        (course.courseHour <= 25 && "#4e701d") ||
        (course.courseHour <= 30 && "#2b16cc") ||
        (course.courseHour <= 50 && "#2ecc16") ||
        (course.courseHour <= 90 && "#dedc46"),
    }),
  );


  return (
    <div className="h-72 w-full rounded-lg  bg-gray-50 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <h1 className="text-center text-2xl dark:text-white">
        User courses time chart
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="30%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {data01.map((entry) => (
              <Cell
                fill={entry.color}
                // stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            cx="30%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#45625d"
            label
          >
            {data.map((entry) => (
              <Cell fill={entry.color} key={entry.duration} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            className="bg-blue-700"
            verticalAlign="middle"
            align="right"
            width="24%"
            layout="vetical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserDashboardPieChart;
