import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FixYourPcForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Sending email via EmailJS
      await emailjs.send(
        "service_852961k",
        "template_b9zjvxx",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          deviceType: data.deviceType,
          subject: data.subject,
          model: data.model,
          message: data.message,
        },
        "OjaHPzDqBkQOLjcjO"
      );
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-n6">
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Name *"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors?.name && (
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            )}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="tel"
              placeholder="Phone *"
              name="phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors?.phone && (
              <p style={{ color: "red" }}>{errors.phone?.message}</p>
            )}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="email"
              placeholder="Email *"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email && (
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            )}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <select
              name="deviceType"
              {...register("deviceType", {
                required: "Device Type is required",
              })}
            >
              <option value="">Select Device *</option>
              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="CCTV">CCTV</option>
            </select>
            {errors?.deviceType && (
              <p style={{ color: "red" }}>{errors.deviceType?.message}</p>
            )}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Enter Brand Name *"
              name="subject"
              {...register("subject", {
                required: "Enter Brand Name is required",
              })}
            />
            {errors?.subject && (
              <p style={{ color: "red" }}>{errors.subject?.message}</p>
            )}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Enter Model Number *"
              name="model"
              {...register("model", {
                required: "Model Number is required",
              })}
            />
            {errors?.model && (
              <p style={{ color: "red" }}>{errors.model?.message}</p>
            )}
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder="Issue *"
              {...register("message", {
                required: "Issue is required",
              })}
            ></textarea>
            {errors?.message && (
              <p style={{ color: "red" }}>{errors.message?.message}</p>
            )}
          </div>
          <div className="col-12 text-center mb-6">
            <button
              type="submit"
              className="btn btn-primary btn-hover-secondary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FixYourPcForm;
