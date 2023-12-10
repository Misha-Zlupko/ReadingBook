"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { MainButtonComponent } from "./MainButtonComponent";

interface InputMainProps {
  // onSubmit: () => void;
}

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const FormRegistrationComponent: React.FC<InputMainProps> = (
  {
    // onSubmit,
  }
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
    // onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name:</label>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password:</label>
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 7,
            message: "Password must be at least 7 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <div>
        <MainButtonComponent text="Registration" className="authorization" />
      </div>
    </form>
  );
};
