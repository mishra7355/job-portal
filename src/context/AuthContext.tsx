"use client";

import React, { createContext, useEffect, useState } from "react";
import { loginUser } from "@/services/auth"; // your API call
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: any;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // ✅ Load token from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAccessToken(token);
      // optionally fetch user profile here
    }
    setLoading(false);
  }, []);

  // ✅ Handle login
  const login = async (email: string, password: string) => {
    const response = await loginUser({ email, password });

    localStorage.setItem("access_token", response.access);
    localStorage.setItem("refresh_token", response.refresh);

    setAccessToken(response.access);
    setUser(response.user); // optionally replace with API `me` endpoint

    router.push("/dashboard");
  };

  // ✅ Handle logout
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAccessToken(null);
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
