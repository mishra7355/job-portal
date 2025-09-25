"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Stepper from "@/components/Stepper";
import { useJobForm } from "@/context/JobFormContext";

export default function Step1Form() {
  const router = useRouter();
  const { formData, updateForm } = useJobForm();

  const [unpaid, setUnpaid] = useState(formData.unpaid || false);

  // Local state for inputs (prefilled if coming back)
  const [jobTitle, setJobTitle] = useState(formData.jobTitle || "");
  const [department, setDepartment] = useState(formData.department || "");
  const [jobType, setJobType] = useState(formData.jobType || "");
  const [workMode, setWorkMode] = useState(formData.workMode || "");
  const [location, setLocation] = useState(formData.location || "");
  const [openings, setOpenings] = useState(formData.openings || "");
  const [salaryMin, setSalaryMin] = useState(formData.salaryMin || "");
  const [salaryMax, setSalaryMax] = useState(formData.salaryMax || "");
  const [currency, setCurrency] = useState(formData.currency || "INR");

  const handleNext = () => {
    updateForm({
      jobTitle,
      department,
      jobType,
      workMode,
      location,
      openings,
      unpaid,
      salaryMin: unpaid ? null : salaryMin,
      salaryMax: unpaid ? null : salaryMax,
      currency: unpaid ? null : currency,
    });

    router.push("/create-jobs/step2");
  };

  return (
    <div>
      <Stepper />

      {/* Job Info Section */}
      <div className="mx-auto bg-white shadow rounded-lg p-6 mb-4">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">
          Job Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter a job..."
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select department</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select job type</option>
              <option value="full_time">Full Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Work Mode</label>
            <select
              value={workMode}
              onChange={(e) => setWorkMode(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select work mode</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-Site">On-Site</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="San Francisco, CA"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Openings
            </label>
            <input
              type="number"
              value={openings}
              onChange={(e) => setOpenings(e.target.value)}
              placeholder="Type here..."
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Compensation Section */}
      <div className="mx-auto bg-white shadow rounded-lg p-6 mt-2">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">
          Compensation
        </h2>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={unpaid}
            onChange={() => setUnpaid(!unpaid)}
          />
          Is this an Unpaid Role?
        </label>

        {!unpaid && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Salary Min
              </label>
              <select
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="">Select</option>
                <option value="10000">10,000</option>
                <option value="20000">20,000</option>
                <option value="50000">50,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Salary Max
              </label>
              <select
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="">Select</option>
                <option value="30000">30,000</option>
                <option value="60000">60,000</option>
                <option value="100000">1,00,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mx-auto flex justify-end gap-2 mt-6">
        <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
          Save as Draft
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
