import { Button, FieldError, Input, Label } from "@/shared";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ChangePasswordFormFieldProps {
  id: string;
  label: string;
  show: boolean;
  toggleShow: () => void;
  register: UseFormRegisterReturn;
  error?: string;
}
export function ChangePasswordFormField({
  id,
  label,
  show,
  toggleShow,
  register,
  error,
}: ChangePasswordFormFieldProps) {
  return (
    <div>
      <Label htmlFor={id} label={label} />
      <div>
        <div className="relative">
          <Input
            id={id}
            type={show ? "text" : "password"}
            placeholder={`Enter your ${label.toLowerCase()}`}
            {...register}
          />
          <Button
            variant="ghost"
            onClick={() => toggleShow()}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {show ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </Button>
        </div>
        <FieldError message={error} />
      </div>
    </div>
  );
}
