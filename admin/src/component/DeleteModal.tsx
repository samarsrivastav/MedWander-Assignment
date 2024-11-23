import React from "react";
import { Modal, Button } from "flowbite-react";

interface DeleteModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal show={show} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this complaint?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={onConfirm}>
              Yes, Delete
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
