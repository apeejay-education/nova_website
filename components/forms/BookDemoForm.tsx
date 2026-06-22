"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  User, Building2, Mail, Phone, MapPin,
  Users, Briefcase, CheckCircle,
} from "lucide-react";
import { BOOK_DEMO_FORM } from "@/lib/constants";

const ROLES = [
  "Principal",
  "Vice Principal",
  "Director",
  "Trustee",
  "Administrator",
  "Teacher",
  "IT Manager",
  "Procurement Head",
  "Product Manager",
  "Others",
] as const;

const STUDENT_BUCKETS = [
  "< 500",
  "500–1,000",
  "1,000–2,500",
  "2,500–5,000",
  "5,000+",
] as const;

const schema = z.object({
  fullName:    z.string().min(2, "Enter your name"),
  schoolName:  z.string().min(2, "Enter your school name"),
  email:       z.string().email("Enter a valid email"),
  mobile:      z.string().min(10, "Enter a valid mobile number").regex(/^[+\d\s\-()]{10,}$/, "Enter a valid mobile number"),
  city:        z.string().min(2, "Enter your city"),
  role:        z.string().min(1, "Select your role"),
  otherRole:   z.string().optional(),
  studentCount:z.string().min(1, "Select student count"),
  _hp:         z.string().max(0),
}).refine(
  d => d.role !== "Others" || (d.otherRole && d.otherRole.trim().length > 1),
  { message: "Please specify your role", path: ["otherRole"] }
);

type FormValues = z.infer<typeof schema>;

interface BookDemoFormProps { onSuccess?: () => void; }

export default function BookDemoForm({ onSuccess }: BookDemoFormProps) {
  const [selectedRole,    setSelectedRole]    = useState("");
  const [selectedStudents,setSelectedStudents] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: "", role: "", studentCount: "" },
  });

  const onSubmit = async (data: FormValues) => {
    if (data._hp) return;
    await new Promise(r => setTimeout(r, 900));
    reset();
    setSelectedRole("");
    setSelectedStudents("");
    onSuccess?.();
  };

  if (isSubmitSuccessful) {
    return (
      <motion.div
        className="flex flex-col items-center text-center py-10 gap-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(22,163,74,0.15)", border: "1px solid rgba(22,163,74,0.30)" }}
        >
          <CheckCircle size={26} className="text-[#16A34A]" />
        </div>
        <div>
          <h3 className="text-[18px] font-semibold text-white">{BOOK_DEMO_FORM.successHeadline}</h3>
          <p className="text-[13px] text-white/45 mt-1.5 max-w-xs mx-auto">{BOOK_DEMO_FORM.successMessage}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-1">

      {/* Honeypot */}
      <input {...register("_hp")} type="text" autoComplete="off" tabIndex={-1} aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} />

      {/* Row 1 — Name + School */}
      <div className="grid grid-cols-2 gap-3">
        <DarkField label="Full Name" icon={User} error={errors.fullName?.message}>
          <input {...register("fullName")} type="text" placeholder="Your name" autoComplete="name" className={inputCls(!!errors.fullName)} />
        </DarkField>
        <DarkField label="School Name" icon={Building2} error={errors.schoolName?.message}>
          <input {...register("schoolName")} type="text" placeholder="School or institution" autoComplete="organization" className={inputCls(!!errors.schoolName)} />
        </DarkField>
      </div>

      {/* Row 2 — Email */}
      <DarkField label="Work Email" icon={Mail} error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="principal@yourschool.edu.in" autoComplete="email" className={inputCls(!!errors.email)} />
      </DarkField>

      {/* Row 3 — Mobile + City */}
      <div className="grid grid-cols-2 gap-3">
        <DarkField label="Mobile" icon={Phone} error={errors.mobile?.message}>
          <input {...register("mobile")} type="tel" placeholder="+91 98765 43210" autoComplete="tel" className={inputCls(!!errors.mobile)} />
        </DarkField>
        <DarkField label="City" icon={MapPin} error={errors.city?.message}>
          <input {...register("city")} type="text" placeholder="New Delhi" autoComplete="address-level2" className={inputCls(!!errors.city)} />
        </DarkField>
      </div>

      {/* Role pill-selector */}
      <div className="pt-1">
        <label className="text-[10px] font-semibold tracking-widest uppercase text-white/55 flex items-center gap-1.5 mb-2.5">
          <Briefcase size={10} className="text-white/45" />
          Your Role
        </label>
        <div className="flex flex-wrap gap-1.5">
          {ROLES.map(role => {
            const active = selectedRole === role;
            return (
              <button
                key={role}
                type="button"
                onClick={() => {
                  setSelectedRole(role);
                  setValue("role", role, { shouldValidate: true });
                }}
                className="rounded-full px-3 py-1.5 text-[11px] font-medium transition-all duration-200"
                style={{
                  background: active ? "rgba(37,99,235,0.22)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${active ? "rgba(37,99,235,0.55)" : "rgba(255,255,255,0.16)"}`,
                  color: active ? "#93C5FD" : "rgba(255,255,255,0.72)",
                  boxShadow: active ? "0 0 12px rgba(37,99,235,0.20)" : "none",
                }}
              >
                {role}
              </button>
            );
          })}
        </div>
        {errors.role && <p className="text-[10px] text-red-400 mt-1.5">{errors.role.message}</p>}

        {/* Others — specify */}
        {selectedRole === "Others" && (
          <motion.div
            className="mt-2.5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            <DarkField label="Please specify" icon={Briefcase} error={errors.otherRole?.message}>
              <input
                {...register("otherRole")}
                type="text"
                placeholder="e.g. Operations Manager"
                className={inputCls(!!errors.otherRole)}
                autoFocus
              />
            </DarkField>
          </motion.div>
        )}
      </div>

      {/* Student count pill-selector */}
      <div className="pt-1">
        <label className="text-[10px] font-semibold tracking-widest uppercase text-white/55 flex items-center gap-1.5 mb-2.5">
          <Users size={10} className="text-white/45" />
          Students Enrolled
        </label>
        <div className="flex flex-wrap gap-1.5">
          {STUDENT_BUCKETS.map(bucket => {
            const active = selectedStudents === bucket;
            return (
              <button
                key={bucket}
                type="button"
                onClick={() => {
                  setSelectedStudents(bucket);
                  setValue("studentCount", bucket, { shouldValidate: true });
                }}
                className="rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all duration-200"
                style={{
                  background: active ? "rgba(124,58,237,0.22)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${active ? "rgba(124,58,237,0.55)" : "rgba(255,255,255,0.16)"}`,
                  color: active ? "#C4B5FD" : "rgba(255,255,255,0.72)",
                  boxShadow: active ? "0 0 12px rgba(124,58,237,0.20)" : "none",
                }}
              >
                {bucket}
              </button>
            );
          })}
        </div>
        {errors.studentCount && <p className="text-[10px] text-red-400 mt-1.5">{errors.studentCount.message}</p>}
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl py-3.5 text-[14px] font-semibold text-white transition-all duration-200 relative overflow-hidden"
          style={{
            background: isSubmitting
              ? "rgba(37,99,235,0.5)"
              : "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
            boxShadow: isSubmitting ? "none" : "0 0 32px rgba(37,99,235,0.40), 0 4px 16px rgba(0,0,0,0.30)",
          }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Booking…
            </span>
          ) : "Book My Demo →"}
        </button>

      </div>
    </form>
  );
}

// ─── Dark field wrapper ───────────────────────────────────────────────────────

function DarkField({
  label, icon: Icon, error, children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold tracking-widest uppercase text-white/55 flex items-center gap-1.5">
        <Icon size={10} className="text-white/45" />
        {label}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-xl px-3.5 py-2.5 text-[13px] text-white placeholder:text-white/35 outline-none transition-all duration-200",
    "bg-white/[0.07] border focus:bg-white/[0.10]",
    hasError
      ? "border-red-500/50 focus:border-red-500/70"
      : "border-white/[0.12] focus:border-[#2563EB]/70",
    "focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)]",
  ].join(" ");
}
