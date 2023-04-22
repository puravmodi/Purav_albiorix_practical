import { useForm } from "react-hook-form";
import React from "react";
import { AiFillWarning } from "react-icons/ai";

export default function AddOrEdit({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className="w-[500px]">
      <h1>Add Or Edit</h1>

      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border h-10"
            {...register("name", {
              required: "Name is required!",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <span className="text-red-500 flex items-center gap-2">
              <AiFillWarning className="inline-block" />
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border h-10"
            {...register("email", {
              required: "Email is required!",
              maxLength: 80,
            })}
          />
          {errors.email && (
            <span className="text-red-500 flex items-center gap-2">
              <AiFillWarning className="inline-block" />
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            className="w-full border h-10"
            {...register("mobile", {
              required: "Mobile is required!",
              maxLength: 10,
            })}
          />
          {errors.mobile && (
            <span className="text-red-500 flex items-center gap-2">
              <AiFillWarning className="inline-block" />
              {errors.mobile.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full border h-10"
            {...register("dob", {
              required: "Date of birth is required!",
              maxLength: 10,
            })}
          />
          {errors.dob && (
            <span className="text-red-500 flex items-center gap-2">
              <AiFillWarning className="inline-block" />
              {errors.dob.message}
            </span>
          )}
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <button
            type="button"
            className="bg-gray-500 px-4 py-2"
            onClick={onClose}
          >
            Discard
          </button>
          <button type="submit" className="bg-blue-300 text-white px-4 py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
