"use client";

import { Button, Input, Select } from "@/shared";
import { useState } from "react";
import { CompanyData, RegisterState } from "../types/RegisterFormType";
import { registerValidation } from "../lib/registerValidation";
import { useRegisterCompany } from "@/features/auth";
import { toast } from "react-hot-toast";
import { sizeOptions, typeOptions } from "../config/config";
import { useRouter } from "next/navigation";

const initialState: RegisterState = {
  errors: {},
  success: false,
};

function CompanyForm() {
  const { registerCompany, isError, error, isPending } = useRegisterCompany();
  const [state, setState] = useState<RegisterState>(initialState);
  const router = useRouter();

  const [formData, setFormData] = useState<CompanyData>({
    name: "",
    email: "",
    password: "",
    industry: "",
    size: sizeOptions[0].value,
    type: typeOptions[0].value,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await registerValidation(
      state,
      new FormData(e.currentTarget),
    );

    setState(result);

    console.log("Validation result:", result);

    if (!result.success) return;

    try {
      console.log("Submitting company registration with data:", formData);
      const res = await registerCompany(formData);

      toast.success(
        "Registration successful , you will be redirected to verify your email",
      );
      setTimeout(() => {
        router.push(
          `/auth/verify-email?email=${formData.email}&role=${res.data.role}`,
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
      <Input type="hidden" name="role" value="company" />

      <Input
        name="name"
        label="Company Name"
        error={state?.errors.name?.[0]}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <Input
        name="email"
        label="Email"
        error={
          state?.errors.email?.[0] || (isError ? error?.message : undefined)
        }
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <Input
        name="password"
        label="Password"
        error={
          state?.errors.password?.[0] || (isError ? error?.message : undefined)
        }
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <Input
        name="industry"
        label="Industry"
        error={state?.errors.industry?.[0]}
        value={formData.industry}
        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
      />

      <Select
        name="size"
        label="Company Size"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        options={sizeOptions}
      />

      <Select
        name="type"
        label="Company Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        options={typeOptions}
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

export default CompanyForm;
