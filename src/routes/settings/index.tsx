import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export const Route = createFileRoute("/settings/")({
  component: () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
      <div>
        <h1>React Portal Example</h1>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal>
            <h2>Modal Title</h2>
            <p>This is the content inside the modal.</p>
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
        )}
      </div>
    );
  },
});
