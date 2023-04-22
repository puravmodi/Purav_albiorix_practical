import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ConfirmationModal({onClose}) {
  return (
    <div className="relative flex flex-col gap-8">
      <AiOutlineClose onClick={onClose} className="absolute top-0 right-0 text-xl font-bold cursor-pointer hover:scale-125 duration-200 ease-in" />
      <div>
        <p className="text-2xl font-bold">Are you sure delete this file ?</p>
        <p className="text-md font-semibold text-gray-500">
          If you delete the file you can't recover it.
        </p>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button type="button" className="px-4 py-2 bg-gray-500" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white">
          Delete
        </button>
      </div>
    </div>
  );
}
