import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Sunday",
    A: 100,
    fullMark: 150,
  },
  {
    subject: "Monday",
    A: 90,
    fullMark: 150,
  },
  {
    subject: "Tuesday",
    A: 110,
    fullMark: 150,
  },
  {
    subject: "Wednesday",
    A: 80,
    fullMark: 150,
  },
  {
    subject: "Thursday",
    A: 95,
    fullMark: 150,
  },
  {
    subject: "Friday",
    A: 90,
    fullMark: 150,
  },
  {
    subject: "Saturday",
    A: 100,
    fullMark: 150,
  },
];
function UserDashboardRadarChart() {
  return (
    <div className="h-72 w-full rounded-lg bg-gray-50 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <h1 className="text-center text-2xl dark:text-white">
        Weekly watch time chart
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            dataKey="A"
            // stroke="#710fbb"
            fill="#8ec529"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserDashboardRadarChart;
