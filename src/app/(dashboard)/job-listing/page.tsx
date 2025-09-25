"use client";

import { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";
import { fetchJobs } from "@/services/Job";
import { Job } from "@/types/Job";
import Link from "next/link";

const JobListingPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");
  const organizationId = localStorage.getItem("organizationId");

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobList = await fetchJobs(token, organizationId, 10);
        console.log(jobList);
        setJobs(jobList?.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, [token, organizationId]);

  const handleApply = (jobId: number) => {
    alert(`Applying for job ID: ${jobId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <p className="text-white text-lg font-semibold">Loading jobs...</p>
      </div>
    );
  }

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
    <div className="min-h-screen p-6 bg-gradient-to-r">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Explore Job Opportunities
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link key={job.job_id} href={`/job-detail/${job.job_id}`}>
            <JobCard
              key={job.job_id}
              title={job.job_title}
              company={job.job_type}
              location={job.location}
              onApply={() => handleApply(job.job_id)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;
