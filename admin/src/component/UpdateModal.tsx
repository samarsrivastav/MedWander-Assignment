import React, { useState } from "react";
import { Modal, Button, Label, Select } from "flowbite-react";

interface UpdateModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: (status: string) => void;
  currentStatus: string;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({
  show,
  onClose,
  onConfirm,
  currentStatus,
}) => {
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(e.target.value);
  };

  const handleSubmit = () => {
    onConfirm(newStatus);
  };

  return (
    <Modal show={show} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Update the status of this complaint
          </h3>
          <div className="mb-4">
            <Label htmlFor="status" className="block text-sm font-medium text-gray-900 dark:text-white">
              Status
            </Label>
            <Select
              id="status"
              value={newStatus}
              onChange={handleStatusChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </Select>
          </div>
          <div className="flex justify-center gap-4">
            <Button color="blue" onClick={handleSubmit}>
              Update
            </Button>
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
