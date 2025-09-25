"use client";
import { JobFormProvider } from "@/context/JobFormContext";

export default function CreateJobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <JobFormProvider>{children}</JobFormProvider>;
}
