import React, { useState } from "react";
import AddOrEdit from "./AddOrEdit";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal"
const tableHeaders = ["Name", "Email", "Mobile", "Date of Birth", "Action"];
const userData = [
  { name: "name 1", email: "asdasd", mobile: "asdasd", dob: "asdasd" },
  { name: "name 2", email: "asdasd", mobile: "asdasd", dob: "asdasd" },
  { name: "name 3", email: "asdasd", mobile: "asdasd", dob: "asdasd" },
  { name: "name 4", email: "asdasd", mobile: "asdasd", dob: "asdasd" },
  { name: "name 5", email: "asdasd", mobile: "asdasd", dob: "asdasd" },
];

const UsersList = () => {
  const [isModalOpen, setModal] = useState(false);
  const [isConfirmModal, setConfirmModal] = useState(false);

  const onModalClose = () => {
    setModal(false);
  };

  const onConfirmModalClose = () => {
    setConfirmModal(false);
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <input
            type="text"
            placeholder="Search by name"
            className="border px-8 py-2"
          />
          <button
            type="button"
            onClick={() => {
              setModal(true);
            }}
            className="bg-[#4274ba] text-white px-4 py-3 border-1 border-yellow-100"
          >
            Add New User
          </button>
        </div>
        <div className="overflow-x">
          <table className="table-auto overflow-scroll w-full  border border-slate-400 ">
            <thead>
              <tr>
                {tableHeaders?.map((title) => (
                  <th className="border border-slate-300">{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {userData?.map(({ name, email, mobile, dob }) => (
                <tr>
                  <td className="px-4 py-2 border">{name}</td>
                  <td className="px-4 py-2 border ">{email}</td>
                  <td className="px-4 py-2 border">{mobile}</td>
                  <td className="px-4 py-2 border">{dob}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex flex-row justify-center gap-8">
                      <button
                        type="button"
                        className="bg-[#4274ba] text-white px-4"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-500 text-white px-4"
                        onClick={() => setConfirmModal(true)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={onModalClose}>
          <AddOrEdit onClose={onModalClose} />
        </Modal>
      )}
      {isConfirmModal && (
        <Modal onClose={onConfirmModalClose}>
          <ConfirmationModal onClose={onConfirmModalClose} />
        </Modal>
      )}
    </>
  );
};

export default UsersList;
