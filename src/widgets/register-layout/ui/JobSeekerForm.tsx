"use client";

import { Button, Input } from "@/shared";
import { FormEvent, useState } from "react";
import { validateJobSeeker } from "../lib/validateJobSeeker";
import { JobSeekerData } from "../types/RegisterFormType";

function JobSeekerForm() {
  const [formData, setFormData] = useState<JobSeekerData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const finalData = {
      ...formData,
      role: "jobseeker",
    };

    if (!validateJobSeeker(formData, setFormErrors)) return;

    console.log("signed up:", finalData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setFormErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="firstName"
        label="First Name"
        error={formErrors.firstName}
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
        error={formErrors.lastName}
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
