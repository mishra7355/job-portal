"use client";

import JobCard from "@/components/JobCard";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const JobListingPage = () => {
  const jobs: Job[] = [
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
    {
      id: 4,
      title: "UI/UX Designer",
      company: "CreativeLabs",
      location: "Pune",
    },
    { id: 5, title: "DevOps Engineer", company: "CloudNet", location: "Delhi" },
  ];

  const handleApply = (jobId: number) => {
    alert(`Applying for job ID: ${jobId}`);
  };

  if (jobs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <p className="text-white text-lg font-semibold">
          No job listings available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r ">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Explore Job Opportunities
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            onApply={() => handleApply(job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;
