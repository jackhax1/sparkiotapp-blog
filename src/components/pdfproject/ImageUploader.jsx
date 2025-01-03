import React from 'react';

const ImageUploader = ({ selectedImage, setSelectedImage }) => {

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  );
};

export default ImageUploader;