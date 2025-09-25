"use client";
import { useRouter } from "next/navigation";
import Stepper from "@/components/Stepper";
import { useState, useEffect } from "react";
import { useJobForm } from "@/context/JobFormContext";
import { createJob } from "@/services/Job";

export default function Step3() {
  const router = useRouter();
  const { formData, updateForm } = useJobForm();

  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [hiringManagerId, setHiringManagerId] = useState("");
  const [experience, setExperience] = useState("");
  const [technicalRounds, setTechnicalRounds] = useState("");
  const [publishStatus, setPublishStatus] = useState<
    "public" | "private" | "invite"
  >("public");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (formData) {
      setApplicationDeadline(formData.applicationDeadline || "");
      setHiringManagerId(formData.hiringManagerId || "");
      setExperience(formData.experience || "");
      setTechnicalRounds(formData.technicalRounds || "");
      setPublishStatus(
        (formData.publishStatus as "public" | "private" | "invite") || "public"
      );
    }
  }, [formData]);

  const saveForm = () => {
    updateForm({
      applicationDeadline,
      hiringManagerId,
      experience,
      technicalRounds,
      publishStatus,
    });
  };

  const payloadDummy = {
    ...formData,
    applicationDeadline,
    hiringManagerId,
    experience,
    technicalRounds,
    publishStatus,
  };

  const payload = {
    job_title: payloadDummy.jobTitle,
    job_type: payloadDummy?.jobType?.toLowerCase(),
    work_mode: payloadDummy?.workMode?.toLowerCase(),
    department: payloadDummy.department,
    location: payloadDummy.location,
    is_unpaid_role: payloadDummy.unpaid,
    salary_min: Number(payloadDummy.salaryMin),
    salary_max: Number(payloadDummy.salaryMax),
    salary_currency: payloadDummy.currency,
    salary_type: "annual",
    stipend_amount: null,
    no_of_openings: Number(payloadDummy.openings),
    job_description: payloadDummy.jobDescription,
    required_skills: payloadDummy.requiredSkills,
    preferred_skills: payloadDummy.preferredSkills,
    experience_level: payloadDummy.experience, // "2-4"
    no_of_technical_rounds: Number(payloadDummy.technicalRounds),
    interview_process: payloadDummy.interviewProcess,
    application_deadline: payloadDummy.applicationDeadline,
  };

  const handleFinish = async () => {
    saveForm();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("access_token");
    const organizationId = localStorage.getItem("organizationId");

    try {
      if (!token) {
        console.error("No token found. Please login first.");
        return;
      }

      setLoading(true);

      const response = await createJob(payload, token, organizationId);
      console.log("Job created successfully:", response);

      router.push("/create-jobs/finish");
    } catch (error) {
      console.error("Error creating job:", error?.message || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Stepper />

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-6">
          Publishing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Application Deadline
            </label>
            <input
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Hiring Manager ID
            </label>
            <input
              type="text"
              placeholder="Enter Hiring Manager ID"
              value={hiringManagerId}
              onChange={(e) => setHiringManagerId(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Publish Options */}
        <div className="mt-6 mb-6">
          <label className="block text-sm font-medium mb-3">
            Ready to Publish?
          </label>
          <div className="flex flex-wrap gap-4">
            {["public", "private", "invite"].map((status) => (
              <label
                key={status}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={status}
                  checked={publishStatus === status}
                  onChange={(e) =>
                    setPublishStatus(
                      e.target.value as "public" | "private" | "invite"
                    )
                  }
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6" style={{ marginTop: "80px" }}>
        <button
          onClick={() => {
            saveForm();
            router.push("/create-jobs/step2");
          }}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100"
          disabled={loading}
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          <button
            onClick={saveForm}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            disabled={loading}
          >
            Save as Draft
          </button>
          <button
            onClick={handleFinish}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
