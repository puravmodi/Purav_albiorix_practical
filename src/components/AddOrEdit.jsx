import { useForm } from "react-hook-form";
import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../features/userSlice";

export default function AddOrEdit({ onClose, user }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
      dob: user?.dob || "",
    },
  });

  const onSubmit = (data) => {
    const emailExists = users.find((user) => user.email === data.email);
    if (emailExists && !user?.id) {
      setError("email", {
        type: "email_exists",
        message: "Email already exists",
      });
      return;
    }
    user && user.id
      ? dispatch(
          editUser({
            user: {
              ...data,
              id: user.id,
            },
          })
        )
      : dispatch(
          addUser({
            user: {
              ...data,
              timestamp: new Date().toISOString(),
              id: crypto.randomUUID(),
            },
          })
        );

    onClose();
  };
console.log(errors)
  return (
    <div className="w-full md:w-[500px]">
      <h1 className="text-3xl font-bold text-center py-8">Add Or Edit</h1>

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
              maxLength: {
                value: 10,
                message: "Invalid mobile number"
              },
              minLength:{
                value:10,
                message: "Invalid mobile number"
              },
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
            className="bg-gray-300 px-4 py-2"
            onClick={onClose}
          >
            Discard
          </button>
          <button type="submit" className="bg-[#4274BA] text-white px-4 py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
