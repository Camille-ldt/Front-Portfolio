import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalProject: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <section>
      <div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg w-1/2 text-center"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold">Oups...</h2>
          <p className="mt-4">
            Ce projet est actuellement en développement et sera bientôt
            disponible.
          </p>
          <button
            onClick={closeModal}
            className="mt-6 px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition cursor-pointer"
          >
            Fermer
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModalProject;
