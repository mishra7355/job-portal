// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "HireCoop",
  description: "Job Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {" "}
        <AuthProvider>{children}</AuthProvider>
      </body>
      <ToastProvider /> {/* toast container here */}
    </html>
  );
}
