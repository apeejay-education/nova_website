"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BOOK_DEMO_FORM } from "@/lib/constants";
import Button from "@/components/ui/Button";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  schoolName: z.string().min(2, "Please enter your school name"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z
    .string()
    .min(10, "Please enter a valid mobile number")
    .regex(/^[+\d\s\-()]{10,}$/, "Please enter a valid mobile number"),
  city: z.string().min(2, "Please enter your city"),
  studentCount: z.string().min(1, "Please select student count"),
  // Honeypot — must be empty
  _hp: z.string().max(0),
});

type FormValues = z.infer<typeof schema>;

interface BookDemoFormProps {
  onSuccess?: () => void;
}

export default function BookDemoForm({ onSuccess }: BookDemoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: "" },
  });

  const onSubmit = async (data: FormValues) => {
    // Honeypot check — abort silently if filled (bot)
    if (data._hp) return;

    // TODO: wire up to form endpoint / CRM
    await new Promise((r) => setTimeout(r, 800)); // simulate network
    reset();
    onSuccess?.();
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="w-14 h-14 rounded-full bg-[#DCFCE7] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l6 6 10-10" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-nova-indigo">{BOOK_DEMO_FORM.successHeadline}</h3>
        <p className="text-text-secondary">{BOOK_DEMO_FORM.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        {...register("_hp")}
        type="text"
        name="_hp"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      />

      {/* Full Name */}
      <Field label="Full Name" error={errors.fullName?.message}>
        <input
          {...register("fullName")}
          type="text"
          placeholder="Your name"
          className={inputClass(!!errors.fullName)}
          autoComplete="name"
        />
      </Field>

      {/* School Name */}
      <Field label="School Name" error={errors.schoolName?.message}>
        <input
          {...register("schoolName")}
          type="text"
          placeholder="Name of your school or institution"
          className={inputClass(!!errors.schoolName)}
          autoComplete="organization"
        />
      </Field>

      {/* Email */}
      <Field label="Email Address" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          placeholder="Work email preferred"
          className={inputClass(!!errors.email)}
          autoComplete="email"
        />
      </Field>

      {/* Mobile + City — side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Mobile Number" error={errors.mobile?.message}>
          <input
            {...register("mobile")}
            type="tel"
            placeholder="Mobile number"
            className={inputClass(!!errors.mobile)}
            autoComplete="tel"
          />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <input
            {...register("city")}
            type="text"
            placeholder="City"
            className={inputClass(!!errors.city)}
            autoComplete="address-level2"
          />
        </Field>
      </div>

      {/* Student count */}
      <Field label="Number of Students" error={errors.studentCount?.message}>
        <select
          {...register("studentCount")}
          className={`${inputClass(!!errors.studentCount)} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_14px_center]`}
          defaultValue=""
        >
          <option value="" disabled>Select student count</option>
          {BOOK_DEMO_FORM.fields
            .find((f) => f.name === "studentCount")
            ?.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
      </Field>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? "Booking…" : BOOK_DEMO_FORM.submitLabel}
      </Button>

      <p className="text-center text-sm text-text-secondary">{BOOK_DEMO_FORM.disclaimer}</p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#374151]">{label}</label>
      {children}
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border px-4 py-3 text-base bg-white text-text-primary placeholder:text-text-secondary",
    "focus:outline-none focus:ring-[3px] focus:ring-nova-blue/15 focus:border-nova-blue",
    "transition-colors duration-150",
    hasError ? "border-error" : "border-[#D1D5DB]",
  ].join(" ");
}
