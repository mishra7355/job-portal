"use client";
import { useRouter } from "next/navigation";
import Stepper from "@/components/Stepper";
import { useState } from "react";
export default function Step3() {
  const router = useRouter();
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [hiringManagerId, setHiringManagerId] = useState("");
  const [experience, setExperience] = useState("");
  const [technicalRounds, setTechnicalRounds] = useState("");
  const [publishStatus, setPublishStatus] = useState("public");

  return (
    <div>
      <Stepper />
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-6">
          Publishing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Application Deadline */}
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

          {/* Hiring Manager ID */}
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

        {/* Experience & Technical Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Experience Requirements
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select Experience Level</option>
              <option value="0-1">0-1 years</option>
              <option value="2-4">2-4 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              No. of Technical Rounds
            </label>
            <select
              value={technicalRounds}
              onChange={(e) => setTechnicalRounds(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select no</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        {/* Ready to Publish */}
        <div className="mt-6 mb-6">
          <label className="block text-sm font-medium mb-3">
            Ready to Publish?
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="public"
                checked={publishStatus === "public"}
                onChange={(e) => setPublishStatus(e.target.value)}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Public</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="private"
                checked={publishStatus === "private"}
                onChange={(e) => setPublishStatus(e.target.value)}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Private</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="invite"
                checked={publishStatus === "invite"}
                onChange={(e) => setPublishStatus(e.target.value)}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Invite Only</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
      </div>
      <div className="flex justify-between mt-6" style={{ marginTop: "80px" }}>
        {/* Left side: Previous button */}
        <button
          onClick={() => router.push("/create-jobs/step1")}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100"
        >
          ← Previous
        </button>

        {/* Right side: Save as Draft + Continue */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            Save as Draft
          </button>
          <button
            onClick={() => router.push("/create-jobs/finish")}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
