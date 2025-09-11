"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const stats = [
    { name: "Posted Jobs", value: 24, color: "from-purple-500 to-pink-500" },
    { name: "Applicants", value: 120, color: "from-green-500 to-lime-500" },
    { name: "Interviews", value: 15, color: "from-yellow-500 to-orange-500" },
    { name: "Hired", value: 8, color: "from-blue-500 to-indigo-500" },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "InnovateX",
      location: "Bangalore",
    },
    {
      id: 3,
      title: "Fullstack Developer",
      company: "DevSolutions",
      location: "Mumbai",
    },
  ];

  const [chartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications per month",
        data: [10, 20, 15, 25, 30, 28],
        fill: true,
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 1)",
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Monthly Applications" },
    },
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg flex flex-col items-start`}
          >
            <h2 className="text-xl sm:text-2xl font-bold">{stat.value}</h2>
            <p className="text-sm sm:text-base mt-1">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Interactive Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-8 w-full h-72 sm:h-96">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Recent Jobs Table */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Recent Job Postings</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 sm:px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase">
                Job Title
              </th>
              <th className="px-4 sm:px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase">
                Company
              </th>
              <th className="px-4 sm:px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-4 sm:px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 sm:px-6 py-2">{job.title}</td>
                <td className="px-4 sm:px-6 py-2">{job.company}</td>
                <td className="px-4 sm:px-6 py-2">{job.location}</td>
                <td className="px-4 sm:px-6 py-2">
                  <button className="bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
