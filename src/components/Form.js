import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Company Name"
        {...register("Company Name", { required: true })}
      />
      <textarea
        placeholder="Message"
        {...register("Message", { required: true, maxLength: 500 })}
      />
      <button className="submit" type="submit">
        Submit
      </button>{" "}
    </form>
  );
}
