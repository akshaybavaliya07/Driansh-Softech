"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/Contact-Form";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-gray-600">
            We'd love to hear from you. Get in touch with our team for any
            inquiries or support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-auto aspect-square md:aspect-auto md:h-[600px]">
              <Image
                src="/images/contact.webp"
                alt="Contact Us"
                fill
                style={{ objectFit: "contain" }}
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
              <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
