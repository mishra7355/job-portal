import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  onApply,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-1">{company}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
      <button
        onClick={onApply}
        className="mt-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-transform"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
