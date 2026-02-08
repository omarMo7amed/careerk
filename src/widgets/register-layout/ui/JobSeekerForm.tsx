"use client";

import { Button, Input } from "@/shared";
import { useActionState, useState } from "react";
import { JobSeekerData, RegisterState } from "../types/RegisterFormType";
import { registerJobSeeker } from "../lib/actions";
import { useFormStatus } from "react-dom";

const initialState: RegisterState = {
  errors: {},
  success: false,
};

function JobSeekerForm() {
  const [state, registerAction] = useActionState(
    registerJobSeeker,
    initialState,
  );
  const { pending } = useFormStatus();

  //
  const [formData, setFormData] = useState<JobSeekerData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <form
      action={registerAction}
      key={state?.success ? "success" : "idle"}
      className="space-y-4"
    >
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
        error={state?.errors.email?.[0]}
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
        error={state?.errors.password?.[0]}
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

export default JobSeekerForm;
