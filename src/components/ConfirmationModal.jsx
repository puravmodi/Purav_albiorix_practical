import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ConfirmationModal({ onClose, onConfirmDelete }) {
  return (
    <div className="relative flex flex-col gap-8 pt-10 w-full md:w-[500px]">
      <AiOutlineClose
        onClick={onClose}
        className="absolute top-0 right-0 text-xl font-bold cursor-pointer hover:scale-125 duration-200 ease-in"
      />
      <div className="text-center flex flex-col gap-4">
        <p className="text-2xl font-bold">Are you sure?</p>
        <p className="text-md font-semibold text-gray-500">
          Do you really want to delete this User? This process can not be
          undone.
        </p>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-[#EF4444] text-white"
          onClick={onConfirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
