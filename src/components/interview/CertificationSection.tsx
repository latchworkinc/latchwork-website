"use client";

import { useFormContext } from "react-hook-form";
import Card from "@/components/ui/Card";
import Checkbox from "@/components/ui/Checkbox";
import type { InterviewFormValues } from "@/lib/validation/interview-schema";

export default function CertificationSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<InterviewFormValues>();

  return (
    <Card>
      <Checkbox
        id="certified"
        label="I certify that the information I have provided is accurate and complete to the best of my knowledge. I understand that completing this interview does not guarantee employment with Latchwork Inc."
        error={errors.certified?.message}
        {...register("certified")}
      />
    </Card>
  );
}
