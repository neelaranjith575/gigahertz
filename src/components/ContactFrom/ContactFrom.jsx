import React from "react";
import { useForm } from "react-hook-form";
import { contactDetails } from "../../api/contact";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
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
      await contactDetails(
        data.name,
        data.phone,
        data.email,
        data.subject,
        data.message
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
          <div className="col-md-12 col-12 mb-6">
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
          <div className="col-md-12 col-12 mb-6">
            <input
              type="text"
              placeholder="Subject *"
              name="subject"
              {...register("subject", {
                required: "Subject is required",
              })}
            />
            {errors?.subject && (
              <p style={{ color: "red" }}>{errors.subject?.message}</p>
            )}
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder="Message *"
              {...register("message", {
                required: "Message is required",
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

export default ContactForm;
