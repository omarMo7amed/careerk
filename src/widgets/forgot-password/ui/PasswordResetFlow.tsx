"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ForgotPasswordStep } from "./steps/ForgotPasswordStep";
import { VerifyOtpStep } from "./steps/VerifyOtpStep";
import { SetNewPasswordStep } from "./steps/SetNewPasswordStep";

type Step = "email" | "otp" | "password";

interface FlowState {
  email: string;
  otp: string;
}

export function PasswordResetFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [flowState, setFlowState] = useState<FlowState>({
    email: "",
    otp: "",
  });

  const handleEmailSubmit = (email: string) => {
    setFlowState((prev) => ({ ...prev, email }));
    setCurrentStep("otp");
  };

  const handleOtpSubmit = (otp: string) => {
    setFlowState((prev) => ({ ...prev, otp }));
    setCurrentStep("password");
  };

  const handleBackToEmail = () => {
    setCurrentStep("email");
    setFlowState({ email: "", otp: "" });
  };

  const handleBackToOtp = () => {
    setCurrentStep("otp");
    setFlowState((prev) => ({ ...prev, otp: "" }));
  };

  return (
    <AnimatePresence mode="wait">
      {currentStep === "email" && (
        <motion.div
          key="email-step"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ForgotPasswordStep
            onSubmit={handleEmailSubmit}
            email={flowState.email}
          />
        </motion.div>
      )}

      {currentStep === "otp" && (
        <motion.div
          key="otp-step"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <VerifyOtpStep
            email={flowState.email}
            onSubmit={handleOtpSubmit}
            onBack={handleBackToEmail}
          />
        </motion.div>
      )}

      {currentStep === "password" && (
        <motion.div
          key="password-step"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <SetNewPasswordStep
            email={flowState.email}
            otp={flowState.otp}
            onBack={handleBackToOtp}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
