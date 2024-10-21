import FaceRecog from "../components/face-recog";
import { useEffect, useState } from "react";
import { Demo } from "./demo";
const { ipcRenderer } = window.require("electron"); // https://github.com/electron/electron/issues/7300

export const Home = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    ipcRenderer.on("chosenFile", (event, base64) => {
      setImageSrc(`data:image/png;base64,${base64}`);
    });
  }, []);

  const handleFileSelection = () => {
    ipcRenderer.send("chooseFile");
  };

  return (
    <div>
      <h1> Home Page</h1>

      <button
        onClick={handleFileSelection}
        className="bg-blue-100 rounded-xl px-3 m-2"
      >
        Select Image
      </button>

      <div className="p-4 max-w-xl">
        {imageSrc && <img src={imageSrc} alt="Selected Image" />}
      </div>
      {/* 
      <FaceRecog /> */}

      <Demo />
    </div>
  );
};
