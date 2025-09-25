"use client";

import { useEffect, useState } from "react";
import { fetchJobById } from "@/services/Job";

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

interface Job {
  id: number;
  job_title: string;
  job_type: string;
  work_mode: string;
  location: string;
  department: string;
  salary: {
    currency: string;
    min: number;
    max: number;
    type: string;
  };
  no_of_openings: number;
  experience_level: string;
  no_of_technical_rounds: number;
  application_deadline: string;
  status: string;
  job_description: string;
  required_skills: string[];
  preferred_skills: string[];
  interview_process: string;
  hiring_manager: {
    name: string;
    email: string;
  };
  custom_form: {
    name: string;
    questions: {
      id: number;
      question_text: string;
      is_required: boolean;
    }[];
  };
  analytics: {
    total_views: number;
    total_applications: number;
    applications_this_week: number;
    [key: string]: number;
  };
  created_at: string;
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJob = async () => {
      try {
        // Resolve the params promise
        const { id } = await params;

        const token = localStorage.getItem("access_token");
        const organizationId = localStorage.getItem("organizationId");
        const jobData = await fetchJobById(id, token, organizationId);
        setJob(jobData?.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    getJob();
  }, [params]);

  if (loading) return <p className="p-6 text-center">Loading job details...</p>;
  if (!job) return <p className="p-6 text-center">Job not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Job Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {job?.job_title || "N/A"}
      </h1>

      {/* Job Info */}
      <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <p>
          <span className="font-semibold">Job Type:</span>{" "}
          {job?.job_type || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Work Mode:</span>{" "}
          {job?.work_mode || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Department:</span>{" "}
          {job?.department || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {job?.location || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Salary:</span>{" "}
          {job?.salary
            ? `${job.salary.currency || "N/A"} ${
                job.salary.min?.toLocaleString() || "N/A"
              } - ${job.salary.max?.toLocaleString() || "N/A"} (${
                job.salary.type || "N/A"
              })`
            : "N/A"}
        </p>
        <p>
          <span className="font-semibold">Openings:</span>{" "}
          {job?.no_of_openings ?? "N/A"}
        </p>
        <p>
          <span className="font-semibold">Experience Level:</span>{" "}
          {job?.experience_level || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Technical Rounds:</span>{" "}
          {job?.no_of_technical_rounds ?? "N/A"}
        </p>
        <p>
          <span className="font-semibold">Application Deadline:</span>{" "}
          {job?.application_deadline
            ? new Date(job.application_deadline).toLocaleDateString()
            : "N/A"}
        </p>
        <p>
          <span className="font-semibold">Status:</span> {job?.status || "N/A"}
        </p>
      </div>

      {/* Job Description */}
      <div className="bg-white shadow rounded-lg p-6 mb-2">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{job?.job_description || "N/A"}</p>
      </div>

      {/* Skills */}
      <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job?.required_skills?.length ? (
              job.required_skills.map((skill: string, idx: number) => (
                <li key={idx}>{skill}</li>
              ))
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Preferred Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {job?.preferred_skills?.length ? (
              job.preferred_skills.map((skill: string, idx: number) => (
                <li key={idx}>{skill}</li>
              ))
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>
      </div>

      {/* Interview Process */}
      <div className="bg-white shadow rounded-lg p-6 mb-2">
        <h2 className="text-xl font-semibold mb-2">Interview Process</h2>
        <p className="text-gray-700">{job?.interview_process || "N/A"}</p>
      </div>

      {/* Hiring Manager */}
      <div className="bg-white shadow rounded-lg p-6 mb-2">
        <h2 className="text-xl font-semibold mb-2">Hiring Manager</h2>
        <p className="text-gray-700">
          {job?.hiring_manager?.name || "N/A"} (
          {job?.hiring_manager?.email || "N/A"})
        </p>
      </div>

      {/* Custom Form */}
      <div className="bg-white shadow rounded-lg p-6 mb-2">
        <h2 className="text-xl font-semibold mb-2">Application Form</h2>
        <p className="font-semibold mb-2">
          Form Name: {job?.custom_form?.name || "N/A"}
        </p>
        <ul className="list-decimal list-inside text-gray-700">
          {job?.custom_form?.questions?.length ? (
            job.custom_form.questions.map((q) => (
              <li key={q.id}>
                {q.question_text} {q.is_required ? "(Required)" : ""}
              </li>
            ))
          ) : (
            <li>N/A</li>
          )}
        </ul>
      </div>

      {/* Analytics */}
      <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        <div>
          <h2 className="font-semibold">Total Views</h2>
          <p className="text-gray-700">{job?.analytics?.total_views ?? 0}</p>
        </div>
        <div>
          <h2 className="font-semibold">Total Applications</h2>
          <p className="text-gray-700">
            {job?.analytics?.total_applications ?? 0}
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Applications This Week</h2>
          <p className="text-gray-700">
            {job?.analytics?.applications_this_week ?? 0}
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-2">
        Created At:{" "}
        {job?.created_at ? new Date(job.created_at).toLocaleString() : "N/A"}
      </p>
    </div>
  );
}
