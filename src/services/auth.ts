// src/services/auth.ts
import api from "@/lib/api";
import {
  RegisterPayload,
  RegisterResponse,
  LoginPayload,
  LoginResponse,
} from "@/types/auth";

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await api.post<RegisterResponse>("/auth/register/", payload);
  return data;
};

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login/", payload);
  return response.data;
}
