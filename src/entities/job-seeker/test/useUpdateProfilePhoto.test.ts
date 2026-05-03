import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { useUpdateProfilePhoto } from "../model/useUpdateProfilePhoto";
import * as uploadModule from "../api/uploadProfilePhoto";
import { jobSeekerKeys } from "../lib/queryKeys";

// Mock FileReader
class MockFileReader {
  result: string | ArrayBuffer | null = null;
  onloadend: (() => void) | null = null;

  readAsDataURL(file: Blob) {
    setTimeout(() => {
      this.result = "data:image/jpeg;base64,mockImageData";
      this.onloadend?.();
    }, 0);
  }
}

Object.defineProperty(global, "FileReader", {
  value: MockFileReader,
  writable: true,
});

describe("useUpdateProfilePhoto", () => {
  const mockToken = "test-token-123";
  const mockFile = new File(["image-data"], "profile.jpg", {
    type: "image/jpeg",
  });
  const newImageUrl = "https://cdn.example.com/profiles/user-123/profile.jpg";

  const mockJobSeekerData = {
    data: {
      id: "user-123",
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
      profileImageUrl: "https://cdn.example.com/old-image.jpg",
      bio: "Software Developer",
      location: "New York",
      phoneNumber: "+1234567890",
      isEmailVerified: true,
    },
  };

  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const wrapper = ({ children }: { children: ReactNode }) =>
    React.createElement(QueryClientProvider, { client: queryClient }, children);

  it("should show preview immediately from local file", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    mockUpload.mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: {
                profileImageUrl: newImageUrl,
              },
            });
          }, 100);
        }),
    );

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    expect(result.current.previewUrl).toBeNull();

    // Upload file
    await act(async () => {
      result.current.upload(mockFile);
      // Wait for FileReader to complete and preview to be set
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // Preview should be set immediately
    expect(result.current.previewUrl).toBe(
      "data:image/jpeg;base64,mockImageData",
    );
    expect(result.current.isPending).toBe(true);
  });

  it("should clear preview on upload error", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    const errorMessage = "Failed to upload image";
    mockUpload.mockRejectedValue(new Error(errorMessage));

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // Upload file
    act(() => {
      result.current.upload(mockFile);
    });

    // Wait for FileReader callback to complete and preview to be set
    // Then the mutation will start and fail
    await waitFor(
      () => {
        expect(result.current.isError).toBe(true);
      },
      { timeout: 2000 },
    );

    // Preview should be cleared after error
    expect(result.current.previewUrl).toBeNull();
    expect(result.current.error).toBe(errorMessage);
  });

  it("should keep preview on success", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    mockUpload.mockResolvedValue({
      data: {
        profileImageUrl: newImageUrl,
      },
    });

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // Upload file
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    const previewUrl = result.current.previewUrl;

    // Wait for success
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Preview should still be there after success
    expect(result.current.previewUrl).toBe(previewUrl);
    expect(result.current.isError).toBe(false);
  });

  it("should clear preview when reset is called", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    mockUpload.mockResolvedValue({
      data: {
        profileImageUrl: newImageUrl,
      },
    });

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // Upload file
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(result.current.previewUrl).not.toBeNull();

    // Reset
    act(() => {
      result.current.reset();
    });

    // Preview should be cleared
    expect(result.current.previewUrl).toBeNull();
    expect(result.current.isPending).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("should update cache with new profile image on success", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    mockUpload.mockResolvedValue({
      data: {
        profileImageUrl: newImageUrl,
      },
    });

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // Upload file
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    // Wait for success
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Check cache was updated with new image URL
    const cachedData = queryClient.getQueryData(jobSeekerKeys.me.all);
    expect(cachedData?.data.profileImageUrl).toBe(newImageUrl);
    // Other fields should be preserved
    expect(cachedData?.data.firstName).toBe("John");
    expect(cachedData?.data.email).toBe("john@example.com");
  });

  it("should not update cache if upload fails", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");
    mockUpload.mockRejectedValue(new Error("Upload failed"));

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // Upload file
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    // Wait for error
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    // Cache should not be updated
    const cachedData = queryClient.getQueryData(jobSeekerKeys.me.all);
    expect(cachedData?.data.profileImageUrl).toBe(
      mockJobSeekerData.data.profileImageUrl,
    );
  });

  it("should handle multiple uploads sequentially", async () => {
    const mockUpload = vi.spyOn(uploadModule, "uploadProfilePhoto");

    const firstImageUrl = "https://cdn.example.com/first.jpg";
    const secondImageUrl = "https://cdn.example.com/second.jpg";

    mockUpload
      .mockResolvedValueOnce({
        data: { profileImageUrl: firstImageUrl },
      })
      .mockResolvedValueOnce({
        data: { profileImageUrl: secondImageUrl },
      });

    queryClient.setQueryData(jobSeekerKeys.me.all, mockJobSeekerData);

    const { result } = renderHook(
      () => useUpdateProfilePhoto({ token: mockToken }),
      {
        wrapper,
      },
    );

    // First upload
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    const firstPreview = result.current.previewUrl;

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    let cachedData = queryClient.getQueryData(jobSeekerKeys.me.all);
    expect(cachedData?.data.profileImageUrl).toBe(firstImageUrl);

    // Reset for second upload
    act(() => {
      result.current.reset();
    });

    // Second upload
    await act(async () => {
      result.current.upload(mockFile);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    const secondPreview = result.current.previewUrl;

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    cachedData = queryClient.getQueryData(jobSeekerKeys.me.all);
    expect(cachedData?.data.profileImageUrl).toBe(secondImageUrl);
    // Both previews should be from the same local file
    expect(firstPreview).toBe(secondPreview);
  });
});
