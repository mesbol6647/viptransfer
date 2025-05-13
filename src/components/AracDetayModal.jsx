
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  padding: "1.5rem",
  overflow: "hidden",
};

const AracDetayModal = ({ open, onClose, images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} className="relative">
        {/* Başlık istenirse buraya */}
        {/* <h3 className="text-xl font-bold text-center mb-4">Araç Detayları</h3> */}

        {/* Ana Resim */}
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-[400px] object-contain rounded mb-4"
        />

        {/* Küçük Resim Seçimi */}
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Option ${index}`}
              className={`h-16 w-24 object-cover cursor-pointer border-2 ${
                selectedImage === img ? "border-orange-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Alternatif olarak aşağıya bir "Kapat" butonu ekledim */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            Kapat
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default AracDetayModal;
