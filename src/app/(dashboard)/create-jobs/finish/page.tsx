"use client";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function JobPostedSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-1">
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        Job Posted Successfully!
      </h1>

      <p className="text-gray-600 mt-2 text-center max-w-lg">
        Your job has been created and is now live. Candidates can start applying
        immediately.
      </p>

      <div className="mt-8">
        <CheckCircleIcon className="w-20 h-20 text-green-500" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href="/job-listing"
          className="px-5 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
        >
          View Post Job
        </Link>

        <Link
          href="/create-jobs/step1"
          className="px-5 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
        >
          Post Another Job
        </Link>

        <Link
          href="/dashboard"
          className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Go To Dashboard
        </Link>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center">
        We&apos;ll notify you when candidates start applying to your position.
      </p>
    </div>
  );
}
