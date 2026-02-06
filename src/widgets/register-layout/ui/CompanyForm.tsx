"use client";

import { Button, Input } from "@/shared";
import { FormEvent, useState } from "react";
import { validateCompany } from "../lib/validateCompany";
import { CompanyData } from "../types/RegisterFormType";
import Select from "@/shared/ui/Select";

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

function CompanyForm() {
  const [formData, setFormData] = useState<CompanyData>({
    companyName: "",
    email: "",
    password: "",
    industry: "",
    size: sizeOptions[0].label,
    type: typeOptions[0].label,
  });

  const [formErrors, setFormErrors] = useState({
    companyName: "",
    email: "",
    password: "",
    industry: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const finalData = {
      ...formData,
      role: "company",
    };

    if (!validateCompany(formData, setFormErrors)) return;

    console.log("signed up:", finalData);

    setFormData({
      companyName: "",
      email: "",
      password: "",
      industry: "",
      size: "1–10",
      type: "STARTUP",
    });
    setFormErrors({ companyName: "", email: "", password: "", industry: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="companyName"
        label="Company Name"
        error={formErrors.companyName}
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />

      <Input
        name="email"
        label="Email"
        error={formErrors.email}
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <Input
        name="password"
        label="Password"
        error={formErrors.password}
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <Input
        name="industry"
        label="Industry"
        error={formErrors.industry}
        value={formData.industry}
        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
      />

      <Select
        label="Company Size"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        options={sizeOptions}
      />

      <Select
        label="Company Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        options={typeOptions}
      />

      <Button variant="primary" size="md" type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}

export default CompanyForm;
