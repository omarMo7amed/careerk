"use client";

import { Button, Input } from "@/shared";
import { useActionState, useState } from "react";
import { CompanyData, RegisterState } from "../types/RegisterFormType";
import Select from "@/shared/ui/Select";
import { useFormStatus } from "react-dom";
import { registerCompany } from "../lib/actions";

const sizeOptions = [
  {
    label: "1-50",
    value: "SIZE_1_50",
  },
  {
    label: "51-200",
    value: "SIZE_51_200",
  },
  {
    label: "201-1000",
    value: "SIZE_201_1000",
  },
  {
    label: "1000+",
    value: "SIZE_1000_PLUS",
  },
];

const typeOptions = [
  {
    label: "Start-up",
    value: "STARTUP",
  },
  {
    label: "Scale-up",
    value: "SCALE_UP",
  },
  {
    label: "Enterprise",
    value: "ENTERPRISE",
  },
  {
    label: "Non-profit",
    value: "NON_PROFIT",
  },
  {
    label: "Government",
    value: "GOVERNMENT",
  },
];

const initialState: RegisterState = {
  errors: {},
  success: false,
};

function CompanyForm() {
  const [state, registerAction] = useActionState(registerCompany, initialState);
  const { pending } = useFormStatus();

  const [formData, setFormData] = useState<CompanyData>({
    companyName: "",
    email: "",
    password: "",
    industry: "",
    size: sizeOptions[0].value,
    type: typeOptions[0].value,
  });

  return (
    <form
      action={registerAction}
      key={state?.success ? "success" : "idle"}
      className="space-y-4"
    >
      <Input
        name="companyName"
        label="Company Name"
        error={state?.errors.companyName?.[0]}
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />

      <Input
        name="email"
        label="Email"
        error={state?.errors.email?.[0]}
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <Input
        name="password"
        label="Password"
        error={state?.errors.password?.[0]}
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
        disabled={pending}
        variant="primary"
        size="md"
        type="submit"
        className="w-full"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default CompanyForm;
