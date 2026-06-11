"use client";

import { Button, Input } from "@/shared";
import { useState } from "react";
import { JobSeekerData, RegisterState } from "../types/RegisterFormType";
import { registerValidation } from "../lib/registerValidation";
import { useRegisterJobSeeker } from "@/features/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialState: RegisterState = {
  errors: {},
  success: false,
};

function JobSeekerForm() {
  const { registerJobSeeker, isError, error, isPending } =
    useRegisterJobSeeker();
  const [state, setState] = useState<RegisterState>(initialState);
  const router = useRouter();

  const [formData, setFormData] = useState<JobSeekerData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await registerValidation(
      state,
      new FormData(e.currentTarget),
    );

    setState(result);

    if (!result.success) return;

    try {
      const res = await registerJobSeeker(formData);

      toast.success("Registration successful");
      const normalizedRole =
        res.data.role === "job-seeker" ? "jobseeker" : res.data.role;
      setTimeout(() => {
        router.push(
          `/auth/verify-email?email=${formData.email}&role=${normalizedRole}`,
        );
      }, 1000);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Registration failed",
      );
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      key={state?.success ? "success" : "idle"}
      className="space-y-4"
    >
      <Input type="hidden" name="role" value="jobseeker" />

      <Input
        name="firstName"
        label="First Name"
        // required
        error={state?.errors.firstName?.[0]}
        value={formData.firstName}
        onChange={(e) =>
          setFormData({
            ...formData,
            firstName: e.target.value,
          })
        }
      />

      <Input
        name="lastName"
        label="Last Name"
        // required
        error={state?.errors.lastName?.[0]}
        value={formData.lastName}
        onChange={(e) =>
          setFormData({
            ...formData,
            lastName: e.target.value,
          })
        }
      />

      <Input
        name="email"
        label="Email"
        // required
        error={
          state?.errors.email?.[0] || (isError ? error?.message : undefined)
        }
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      <Input
        name="password"
        label="Password"
        // required
        error={
          state?.errors.password?.[0] || (isError ? error?.message : undefined)
        }
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
      />

      <Button
        disabled={isPending}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        {isPending ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  );
}

export default JobSeekerForm;
