import { AUTH_ENDPOINTS } from "../config/auth.endpoints";

import { handleApiError } from "../lib/handleError";
import { LoginRequest, LoginResponse } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function login(data: LoginRequest): Promise<LoginResponse> {
  // const res = await fetch(`${BASE_URL}${AUTH_ENDPOINTS.LOGIN}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });

  // if (!res.ok) {
  //   await handleApiError(res, "Login failed");
  // }

  // return res.json();

  return new Promise((resolve) => {
    return resolve({
      success: true,
      data: {
        id: "123",
        email: data.email,
        firstName: "John",
        lastName: "Doe",
        profileImageUrl: null,
        isActive: true,
        isVerified: true,
        hasProfile: true,
        linkedIn: null,
        github: null,
        totalRecommendedJobs: 5,
        lastLoginAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        accessToken: "fake-jwt-token",
      },
      message: "Login successful",
    });
  });
}
