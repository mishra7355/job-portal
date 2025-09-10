"use client";
import { useRouter } from "next/navigation";
import Stepper from "@/components/Stepper";
import { useState } from "react";

export default function Step2() {
  const router = useRouter();
  const [requiredSkills, setRequiredSkills] = useState<string[]>([
    "Java",
    "CSS",
    "CSS",
  ]);
  const [preferredSkills, setPreferredSkills] = useState<string[]>([
    "Java",
    "CSS",
  ]);

  const handleAddSkill = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "required" | "preferred"
  ) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = e.currentTarget.value.trim();
      if (input) {
        if (type === "required") {
          setRequiredSkills([...requiredSkills, input]);
        } else {
          setPreferredSkills([...preferredSkills, input]);
        }
        e.currentTarget.value = "";
      }
    }
  };

  const handleRemoveSkill = (skill: string, type: "required" | "preferred") => {
    if (type === "required") {
      setRequiredSkills(requiredSkills.filter((s) => s !== skill));
    } else {
      setPreferredSkills(preferredSkills.filter((s) => s !== skill));
    }
  };

  return (
    <div>
      <Stepper />
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-purple-700 mb-6">
          Required Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Required Skills */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Required Skills
            </label>
            <input
              type="text"
              placeholder="Type a skill and press enter"
              onKeyDown={(e) => handleAddSkill(e, "required")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {requiredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill, "required")}
                    className="ml-2 text-purple-500 hover:text-purple-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Preferred Skills */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Preferred Skills
            </label>
            <input
              type="text"
              placeholder="Type a skill and press enter"
              onKeyDown={(e) => handleAddSkill(e, "preferred")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {preferredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill, "preferred")}
                    className="ml-2 text-purple-500 hover:text-purple-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Technical Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Experience Requirements
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Select Experience Level</option>
              <option>0-1 years</option>
              <option>2-4 years</option>
              <option>5+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              No. of Technical Rounds
            </label>
            <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none">
              <option>Select no</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Job Description
          </label>
          <textarea
            placeholder="Job Description"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            rows={4}
          ></textarea>
        </div>

        {/* Interview Process */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Interview Process
          </label>
          <textarea
            placeholder="Describe the interview process step by step"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            rows={3}
          ></textarea>
        </div>

        {/* Buttons */}
      </div>
      <div className="flex justify-between mt-6">
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
            onClick={() => router.push("/create-jobs/step3")}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
