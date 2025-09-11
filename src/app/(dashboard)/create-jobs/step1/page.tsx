"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Stepper from "@/components/Stepper";

export default function Step1Form() {
  const [unpaid, setUnpaid] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Stepper />

      <div className=" mx-auto bg-white shadow rounded-lg p-6 mb-4">
        <h2 className="text-lg font-semibold text-purple-700 mb-4">
          Job Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              placeholder="Enter a job..."
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Select department</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>HR</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Work Mode</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-Site</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
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
              placeholder="Type here..."
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>
      </div>

      <div className=" mx-auto bg-white shadow rounded-lg p-6 mt-2">
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
              <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
                <option>Select</option>
                <option>10,000</option>
                <option>20,000</option>
                <option>50,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Salary Max
              </label>
              <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
                <option>Select</option>
                <option>30,000</option>
                <option>60,000</option>
                <option>1,00,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className=" mx-auto flex justify-end gap-2 mt-6">
        <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
          Save as Draft
        </button>
        <button
          onClick={() => router.push("/create-jobs/step2")}
          className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
