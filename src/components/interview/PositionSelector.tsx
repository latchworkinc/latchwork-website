"use client";

import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import FormField from "@/components/ui/FormField";
import { openRoles } from "@/lib/data";

type PositionSelectorProps = {
  value: string;
  onChange: (slug: string) => void;
};

export default function PositionSelector({ value, onChange }: PositionSelectorProps) {
  return (
    <Card>
      <FormField label="Select Position" required>
        <Select
          value={value}
          onChange={onChange}
          placeholder="Choose the role you're interviewing for"
          options={openRoles.map((role) => ({
            value: role.slug,
            label: `${role.title} — ${role.location}`,
          }))}
        />
      </FormField>
    </Card>
  );
}
