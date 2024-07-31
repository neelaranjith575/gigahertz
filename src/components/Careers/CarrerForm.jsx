import React from "react";
import { useForm } from "react-hook-form";
import { careerDetails } from "../../api/careers";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data) => {
    try {
      await careerDetails(
        data.name,
        data.phone,
        data.email,
        data.jobName,
        data.message,
        data.resume[0]
      );
      navigate("/thank-you");
      if (data.status === 200) {
        enqueueSnackbar("Details Sent Successfully", { variant: "success" });
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Submission error:", error);
      enqueueSnackbar("Details Failed to Sent", {
        variant: "success",
      });
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
              placeholder="Job Name *"
              name="jobName"
              {...register("jobName", {
                required: "Job Name is required",
              })}
            />
            {errors?.jobName && (
              <p style={{ color: "red" }}>{errors.jobName?.message}</p>
            )}
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder="Cover Message *"
              {...register("message", {
                required: "Cover Message is required",
              })}
            ></textarea>
            {errors?.message && (
              <p style={{ color: "red" }}>{errors.message?.message}</p>
            )}
          </div>
          <div className="col-md-12 col-12 mb-6">
            <input
              type="file"
              name="resume"
              {...register("resume", {
                required: "Resume is required",
              })}
            />
            {errors?.resume && (
              <p style={{ color: "red" }}>{errors.resume?.message}</p>
            )}
          </div>
          <div className="col-12 text-center mb-6">
            <button
              type="submit"
              className="btn btn-primary btn-hover-secondary"
            >
              APPLY
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
