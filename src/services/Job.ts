import { JobPayload, JobResponse, Job } from "@/types/Job";
import api from "@/lib/api";

export async function createJob(
  payload: JobPayload,
  token: string,
  organizationId: string
): Promise<JobResponse> {
  const response = await api.post<JobResponse>("/jobs/", payload, {
    headers: {
      Authorization: `Bearer ${token}`, // attach token
      "X-Organization-ID": `${organizationId}`,
    },
  });
  return response.data;
}

export async function fetchJobs(
  token: string | null,
  organizationId: string | null,
  limit = 10
): Promise<Job[]> {
  const response = await api.get(`/jobs/?limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Organization-ID": organizationId,
    },
  });

  return response.data.data;
}

export async function fetchJobById(
  id: string,
  token: string | null,
  organizationId: string | null
) {
  const response = await api.get(`/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Organization-ID": organizationId,
    },
  });
  return response.data;
}
