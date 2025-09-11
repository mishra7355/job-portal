"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check } from "lucide-react";

const steps = [
  { id: 1, name: "Basic Job Details", path: "/create-jobs/step1" },
  { id: 2, name: "Job Skills Information", path: "/create-jobs/step2" },
  { id: 3, name: "Form & Publish Settings", path: "/create-jobs/step3" },
];

export default function Stepper() {
  const pathname = usePathname();
  const router = useRouter();

  const currentStep =
    steps.findIndex((step) => pathname.startsWith(step.path)) + 1;

  return (
    <div className="w-full mb-8">
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isActive = index + 1 === currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1 cursor-pointer group relative"
              onClick={() => router.push(step.path)}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 z-10
                ${
                  isCompleted
                    ? "bg-purple-600 border-purple-600 text-white"
                    : isActive
                    ? "bg-white border-purple-600 text-purple-600"
                    : "bg-gray-100 border-gray-300 text-gray-500"
                } group-hover:scale-110`}
              >
                {isCompleted ? <Check size={18} /> : step.id}
              </div>

              <p
                className={`mt-3 text-sm font-medium ${
                  isCompleted
                    ? "text-purple-600"
                    : isActive
                    ? "text-purple-700"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </p>

              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${
                    index + 1 < currentStep ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
