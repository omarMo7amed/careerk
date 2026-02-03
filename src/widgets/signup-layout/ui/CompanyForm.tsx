"use client";

import { Button, Input } from "@/shared";
import { FormEvent, useState } from "react";
import { validateCompany } from "../lib/validateCompany";
import { CompanyData } from "../types/SignupFormType";

function CompanyForm() {
  const [formData, setFormData] = useState<CompanyData>({
    companyName: "",
    email: "",
    password: "",
    industry: "",
    size: "1–10",
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
      type: "companies",
    };

    if (!validateCompany(formData, setFormErrors)) return;

    console.log("signed up:", finalData);

    setFormData({
      companyName: "",
      email: "",
      password: "",
      industry: "",
      size: "1–10",
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

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Company Size
        </label>
        <select
          name="companySize"
          className="w-full h-12 px-4 bg-bg-surface border border-border rounded-lg text-text-secondary focus:ring-primary focus:border-transparent"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        >
          <option>1–10</option>
          <option>11–50</option>
          <option>51–100</option>
          <option>101–500</option>
          <option>500+</option>
        </select>
      </div>

      <Button variant="primary" size="md" type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}

export default CompanyForm;
