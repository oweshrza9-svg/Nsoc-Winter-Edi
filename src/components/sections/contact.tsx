"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { SITE_DATA } from "@/lib/content";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  role: z.enum(["contributor", "maintainer", "sponsor", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "contributor",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate brief network dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Winter snow-coloured confetti burst
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#bae6fd", "#7dd3fc", "#38bdf8", "#e0f2fe", "#ffffff"],
    });

    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-20 md:py-28 relative bg-secondary/20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-primary text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Connect with Team NSoC
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have questions about participation, repository mentorship, or sponsorship? Reach out to our organizing team.
          </p>
        </div>

        <div className="max-w-xl mx-auto rounded-3xl border border-border/80 bg-card/85 backdrop-blur-2xl p-6 sm:p-10 shadow-xl shadow-sky-500/5">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Inquiry Received!
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. The NSoC team monitors all inquiries at{" "}
                <span className="font-mono text-primary font-medium">{SITE_DATA.officialEmail}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-sm font-medium text-foreground transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-foreground/80 mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Ovesh Siddiqui"
                  {...register("name")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                    errors.name ? "border-rose-500/60 ring-rose-500/20" : "border-border"
                  )}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-foreground/80 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. developer@example.com"
                  {...register("email")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                    errors.email ? "border-rose-500/60 ring-rose-500/20" : "border-border"
                  )}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* Role / Inquiry type */}
              <div>
                <label
                  htmlFor="contact-role"
                  className="block text-xs font-mono uppercase tracking-wider text-foreground/80 mb-2 font-medium"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-role"
                  {...register("role")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
                >
                  <option value="contributor">Contributor Registration & Details</option>
                  <option value="maintainer">Project Admin / Repo Submission</option>
                  <option value="sponsor">Partnership & Sponsorship</option>
                  <option value="other">General Community Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-foreground/80 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your inquiry, background, or proposal..."
                  {...register("message")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none",
                    errors.message ? "border-rose-500/60 ring-rose-500/20" : "border-border"
                  )}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-sky-500/20 active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>
                  Official direct desk:{" "}
                  <a
                    href={`mailto:${SITE_DATA.officialEmail}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {SITE_DATA.officialEmail}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
