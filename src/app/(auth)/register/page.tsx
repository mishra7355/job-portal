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
import { registerUser } from "@/services/auth";
import { toast } from "react-toastify";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    jobTitle: "",
    company: "",
    companyWebsite: "",
    hiringDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const [first_name, ...rest] = formData.fullName.split(" ");
      const last_name = rest.join(" ");

      const payload = {
        email: formData.email,
        password: formData.password,
        first_name,
        last_name,
        gender: formData.gender,
        job_title: formData.jobTitle,
        company: formData.company,
        company_website: formData.companyWebsite,
        hiring_description: formData.hiringDescription,
      };

      const response = await registerUser(payload);
      if (response.success) toast.success("✅ Account created successfully!");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const err = error as any; // only here we cast to any for response
        toast.error(err.response?.data?.email?.[0] || "Login failed!");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Login failed!");
      }
    } finally {
      setLoading(false);
    }
  };

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex items-center border rounded-lg px-3">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-lg px-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
                required
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
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 bg-white text-gray-700"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Job Title */}
            <div className="flex items-center border rounded-lg px-3">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter your job title"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
                required
              />
            </div>

            {/* Company */}
            <div className="flex items-center border rounded-lg px-3">
              <Building className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
                required
              />
            </div>

            {/* Company Website */}
            <div className="flex items-center border rounded-lg px-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="Enter your company website"
                className="flex-1 px-2 py-3 outline-none bg-transparent"
              />
            </div>

            {/* Hiring Description */}
            <textarea
              name="hiringDescription"
              value={formData.hiringDescription}
              onChange={handleChange}
              placeholder="Describe what kind of talent you are looking..."
              className="w-full border rounded-lg px-3 py-3 outline-none bg-transparent"
              rows={3}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link href="/" className="text-purple-600 font-semibold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
