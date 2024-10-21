import React, { useState, useEffect } from "react";

const { ipcRenderer } = window.require("electron"); // https://github.com/electron/electron/issues/7300

// Test clarifai api doesn't work
const FaceRecog = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [concepts, setConcepts] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImageUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const base64 = await readFileAsDataURL(selectedFile);

    ipcRenderer.send("chooseFile", base64);
  };

  useEffect(() => {
    ipcRenderer.on("imageRecognized", (event, data) => {
      setConcepts(data);
      setError(null);
    });

    ipcRenderer.on("imageRecognitionError", (event, errorMessage) => {
      setConcepts([]);
      setError(errorMessage);
    });

    return () => {
      ipcRenderer.removeAllListeners("imageRecognized");
      ipcRenderer.removeAllListeners("imageRecognitionError");
    };
  }, []);

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {concepts.length > 0 && (
        <ul>
          {concepts.map((concept) => (
            <li key={concept.name}>
              {concept.name}: {concept.value}
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default FaceRecog;
