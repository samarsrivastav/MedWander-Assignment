import { useState } from "react";
import { Card, Button } from "flowbite-react";
import { UpdateModal } from "./UpdateModal";
import { DeleteModal } from "./DeleteModal";
import { updateComplaint } from "../api/updateComplaint";
import { deleteComplaint } from "../api/deleteComplaint";

interface ComplaintITF {
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  date: Date;
  id: string;
  onDelete: (id: string) => void; // Add onDelete prop
}

export function ComplaintCard({
  title,
  description,
  category,
  priority,
  status,
  date,
  id,
  onDelete,
}: ComplaintITF) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleUpdate = async (newStatus: string) => {
    try {
        const validStatuses = ["Pending", "In Progress", "Resolved"];
        if (!validStatuses.includes(newStatus)) {
            console.log("Invalid status value");
            return;
        }
      const result = await updateComplaint(id, newStatus);
  
      if (result.status === 200) {
        setCurrentStatus(newStatus); 
        setShowUpdateModal(false);
      }
    } catch (error) {
      console.error("Error updating complaint:", error);
    } 
  };

  const handleDelete = async () => {
    const result = await deleteComplaint(id);
    if (result.status === 200) {
      setShowDeleteModal(false);
      onDelete(id); 
    }
  };

  return (
    <>
      <Card className="max-w-sm">
        <h5 className="mb-2 text-3xl font-bold text-[rgb(22,173,204)] ">
          {title}
        </h5>
        <p className="mb-5 text-base text-[rgb(113,113,122)] dark:text-gray-400 sm:text-lg">
          {description}
        </p>
        <p className="text-base text-[rgb(113,113,122)] dark:text-gray-400 sm:text-lg">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-base text-[rgb(113,113,122)] dark:text-gray-400 sm:text-lg">
          <strong>Priority:</strong> {priority}
        </p>
        <p className="text-base text-[rgb(113,113,122)] dark:text-gray-400 sm:text-lg">
          <strong>Status:</strong> {currentStatus}
        </p>
        <p className="text-base text-[rgb(113,113,122)] dark:text-gray-400 sm:text-lg">
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>

        <div className="flex justify-between mt-4">
          <Button
            color=""
            onClick={() => setShowUpdateModal(true)}
            className="w-1/2 mr-2 bg-[rgb(22,173,204)] hover:bg-[rgb(62,223,255)] text-white"
          >
            Update
          </Button>
          <Button
            color="red"
            onClick={() => setShowDeleteModal(true)}
            className="w-1/2 ml-2"
          >
            Delete
          </Button>
        </div>
      </Card>

      <UpdateModal
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        onConfirm={handleUpdate}
        currentStatus={currentStatus}
      />

      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
