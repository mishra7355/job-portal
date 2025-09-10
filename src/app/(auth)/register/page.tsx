"use client";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  User,
  Lock,
  Briefcase,
  Building,
  Globe,
} from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-white p-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to HireCoop</h1>
        <p className="text-center max-w-md">
          Find jobs faster, hire smarter. <br />
          HireCoop is your trusted career and recruitment partner. <br />
          One platform, endless opportunities.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Join HireCoop and start your recruitment journey
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center border rounded-lg px-3">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-lg px-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Gender */}
            <select className="w-full border rounded-lg px-3 py-3 bg-white text-gray-700">
              <option>Select your gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            {/* Job Title */}
            <div className="flex items-center border rounded-lg px-3">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your job title"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Company */}
            <div className="flex items-center border rounded-lg px-3">
              <Building className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your company name"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Company Website */}
            <div className="flex items-center border rounded-lg px-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <input
                type="url"
                placeholder="Enter your company website"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Hiring Description */}
            <textarea
              placeholder="Describe what kind of talent you are looking..."
              className="w-full border rounded-lg px-3 py-3 outline-none bg-transparent"
              rows={3}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 font-semibold">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
