"use server";

import { mailer } from "@/lib/mailer";
import type { ContactFormData } from "@/validations/contact-schema";

export const sendMail = async (formData: ContactFormData) => {
    try {
        await mailer.sendMail({
            // from: `"Website Contact-Us" <no-reply@yourdomain.com>`,
            to: process.env.MAIL_TO,
            replyTo: formData.email,
            subject: `📩 Website Contact Inquiry - ${formData.subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ""}
                <p><strong>Email:</strong> ${formData.email}</p>
                ${formData.website ? `<p><strong>Website:</strong> ${formData.website}</p>` : ""}
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Message:</strong><br/>${formData.message}</p>
            `,
        }).then((res) => console.log(res));
    } catch (error) {
        console.log("Error while sending mail, ", error);
    }
}