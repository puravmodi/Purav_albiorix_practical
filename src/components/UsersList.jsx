import React, { useState, useEffect } from "react";
import AddOrEdit from "./AddOrEdit";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/userSlice";
import useDebounce from "../hooks/useDebounce";
import { HiSearch } from "react-icons/hi";

const tableHeaders = ["Name", "Email", "Mobile", "Date of Birth", "Action"];

const UsersList = () => {
  const [deleteConfirmModal, setDeleteConfirmModal] = useState({
    show: false,
    id: null,
  });
  const [addEditModal, setAddEditModal] = useState({
    show: false,
    user: null,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchTerm, 600, 3);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (debouncedSearchTerm?.length > 0) {
      const filtered = users.filter((user) => {
        return (
          user.name
            ?.toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          user.email?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [debouncedSearchTerm, users]);

  const onModalClose = () => {
    setAddEditModal({
      show: false,
      user: null,
    });
  };

  const onConfirmModalClose = () => {
    setDeleteConfirmModal({ show: false, id: null });
  };

  const onDeleteConfirmed = (id) => {
    dispatch(deleteUser(id));
    setDeleteConfirmModal({ show: false, id: null });
  };
  return (
    <>
      <div className="flex flex-col gap-8 mt-20 md:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="border text-left flex flex-row items-center w-full md:w-80">
            <HiSearch className="inline-block mx-2 text-xl" />
            <input
              type="text"
              placeholder="Search by name"
              className="py-2 h-full w-full text-md border-0 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setAddEditModal({ show: true, user: null });
            }}
            className="bg-[#4274ba] text-white px-4 py-2 border-1 border-yellow-100"
          >
            Add New User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto overflow-scroll w-full border border-slate-400">
            <thead>
              <tr>
                {tableHeaders?.map((title) => (
                  <th key={title} className="border border-slate-300">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.length > 0 ? (
                filteredUsers?.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border ">{user.email}</td>
                    <td className="px-4 py-2 border">{user.mobile}</td>
                    <td className="px-4 py-2 border">{user.dob}</td>
                    <td className="px-4 py-2 border">
                      <div className="flex flex-row justify-center gap-8">
                        <button
                          type="button"
                          className="bg-[#4274ba] text-white px-4"
                          onClick={() => setAddEditModal({ show: true, user })}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 text-white px-4"
                          onClick={() =>
                            setDeleteConfirmModal({ show: true, id: user.id })
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {addEditModal.show && (
        <Modal onClose={onModalClose}>
          <AddOrEdit onClose={onModalClose} user={addEditModal.user} />
        </Modal>
      )}
      {deleteConfirmModal.show && deleteConfirmModal.id && (
        <Modal onClose={onConfirmModalClose}>
          <ConfirmationModal
            onClose={onConfirmModalClose}
            onConfirmDelete={() => onDeleteConfirmed(deleteConfirmModal?.id)}
          />
        </Modal>
      )}
    </>
  );
};

export default UsersList;
