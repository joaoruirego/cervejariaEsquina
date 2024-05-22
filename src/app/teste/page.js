"use client";
import { useState } from "react";
import Image from "next/image";

const Teste = () => {
  const [imgSrc, setImgSrc] = useState(""); // State to store the image source

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the FileList object
    const reader = new FileReader();

    reader.onload = () => {
      // Set the data URL of the uploaded image as the source
      setImgSrc(reader.result);
    };

    // Read the image file as a data URL
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>React</h1>
      <div>
        <label htmlFor="imageUpload">Upload Image:</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Display the uploaded image */}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Uploaded Image"
            width={100}
            height={100}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Teste;
