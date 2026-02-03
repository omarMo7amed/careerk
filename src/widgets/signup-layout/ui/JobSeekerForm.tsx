"use client";

import { Button, Input } from "@/shared";
import { FormEvent, useState } from "react";
import { validateJobSeeker } from "../lib/validateJobSeeker";
import { JobSeekerData } from "../types/SignupFormType";

function JobSeekerForm() {
  const [formData, setFormData] = useState<JobSeekerData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const finalData = {
      ...formData,
      type: "jobseekers",
    };

    if (!validateJobSeeker(formData, setFormErrors)) return;

    console.log("signed up:", finalData);

    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
    setFormErrors({
      fullName: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="fullName"
        label="Full Name"
        error={formErrors.fullName}
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName: e.target.value,
          })
        }
      />

      <Input
        name="email"
        label="Email"
        error={formErrors.email}
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
        error={formErrors.password}
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
      />

      <Button variant="primary" size="md" type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}

export default JobSeekerForm;
