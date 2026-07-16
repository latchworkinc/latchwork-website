"use client";

import { Controller, useFormContext } from "react-hook-form";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import RadioGroup from "@/components/ui/RadioGroup";
import FormField from "@/components/ui/FormField";
import { US_STATES, type InterviewFormValues } from "@/lib/validation/interview-schema";

export default function ApplicantInfoSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<InterviewFormValues>();

  return (
    <Card>
      <h2 className="text-lg font-semibold text-white">Applicant Information</h2>
      <p className="mt-1 text-sm text-white/50">Tell us a bit about yourself.</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField label="Full Name" required error={errors.fullName?.message}>
          <Input type="text" placeholder="Jordan Alvarez" {...register("fullName")} />
        </FormField>

        <FormField label="Email" required error={errors.email?.message}>
          <Input type="email" placeholder="jordan@email.com" {...register("email")} />
        </FormField>

        <FormField label="Phone" required error={errors.phone?.message}>
          <Input type="tel" placeholder="(312) 555-0148" {...register("phone")} />
        </FormField>

        <FormField label="Current City" required error={errors.city?.message}>
          <Input type="text" placeholder="Chicago" {...register("city")} />
        </FormField>

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <FormField label="Current State" required error={errors.state?.message}>
              <Select
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                placeholder="Select a state"
                options={US_STATES.map((state) => ({
                  value: state.value,
                  label: state.label,
                }))}
              />
            </FormField>
          )}
        />

        <div className="sm:col-span-2">
          <Controller
            name="workAuthorized"
            control={control}
            render={({ field }) => (
              <FormField
                label="Are you legally authorized to work in the United States?"
                required
                error={errors.workAuthorized?.message}
              >
                <RadioGroup
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </FormField>
            )}
          />
        </div>
      </div>
    </Card>
  );
}
