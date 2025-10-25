import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone number"),
  website: z.string(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  consent: z.boolean(),
});

export type ContactFormData = z.infer<typeof contactSchema>;