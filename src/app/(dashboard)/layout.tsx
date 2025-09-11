"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons
import "../globals.css";
import { useAuth } from "@/hooks/useAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Jobs", href: "/job-listing" },
    { name: "Create Job", href: "/create-jobs/step1" },
    { name: "Candidates", href: "/candidates" },
    { name: "All Interview", href: "/interviews" },
    { name: "Analytics", href: "/analytics" },
  ];
  console.log(user);
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-full">
          {/* Sidebar */}
          <aside
            className={`fixed z-40 inset-y-0 left-0 transform bg-purple-800 text-white flex flex-col justify-between w-64 transition-transform duration-300 lg:relative lg:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div>
              {/* Logo */}
              <div className="p-4 bg-white text-purple-800 font-extrabold text-2xl tracking-wide shadow-md">
                Hire<span className="text-pink-500">Coop</span>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col mt-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = link.href.includes("/create-jobs")
                    ? pathname.startsWith("/create-jobs") // active for subpaths
                    : pathname === link.href; // normal exact match for others

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-2 rounded hover:bg-purple-700 transition-colors ${
                        isActive ? "bg-purple-700" : ""
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Footer / User Info */}
            <div className="p-4 border-t border-purple-600">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-purple-300">john@findmyjob.com</p>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white shadow flex items-center justify-between px-4 lg:px-6">
              <button
                className="text-2xl text-purple-800 lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <HiX /> : <HiMenu />}
              </button>
              <h1 className="text-lg font-medium">
                {`${user?.first_name} ${user?.last_name}`} ({user?.email})
              </h1>
              <div className="w-10 h-10 rounded-full bg-green-600"></div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
