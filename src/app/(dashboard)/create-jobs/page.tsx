"use client";
import { useState } from "react";

export default function CreateJobPage() {
  const [unpaid, setUnpaid] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 text-purple-600 font-medium">
          STEP 1{" "}
          <span className="block text-gray-500 text-sm">Basic Job Details</span>
        </div>
        <div className="flex-1 text-gray-400">
          STEP 2 <span className="block text-sm">Job Skills Information</span>
        </div>
        <div className="flex-1 text-gray-400">
          STEP 3 <span className="block text-sm">Form & Publish Settings</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-purple-700 mb-4">
        Job Information
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Enter a job..."
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Department</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select department</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Job Type</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Job Type</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Work Mode</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Remote</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Location</label>
          <input
            type="text"
            placeholder="San Francisco, CA"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Number of Openings</label>
          <input
            type="number"
            placeholder="Type here..."
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold text-purple-700 mb-2">
          Compensation
        </h3>
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={unpaid}
            onChange={() => setUnpaid(!unpaid)}
          />
          Is this an Unpaid Role?
        </label>

        {!unpaid && (
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Salary Min</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Salary Max</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Currency</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded">
          Previous
        </button>
        <div className="space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded">
            Save as Draft
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
