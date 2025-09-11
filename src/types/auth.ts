// src/types/auth.ts
export interface RegisterPayload {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender?: string;
  job_title?: string;
  company?: string;
  company_website?: string;
  hiring_description?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    company: string;
    account_status: string;
    email_verified: boolean;
    created_at: string;
    tokens: {
      access: string;
      refresh: string;
    };
  };
  organization_id: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    job_title?: string;
    company?: string;
  };
}
