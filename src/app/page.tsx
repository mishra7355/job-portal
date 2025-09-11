"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { login } = useAuth(); // ✅ use AuthContext

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(formData.email, formData.password); // ✅ AuthContext login
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error(error);

      // If using fetch:
      if (error instanceof Error) {
        toast.error(error.message || "Login failed!");
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
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-center max-w-md">
          Access your account and manage your recruitment journey on HireCoop.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <a href="/register" className="text-purple-600 font-semibold">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
