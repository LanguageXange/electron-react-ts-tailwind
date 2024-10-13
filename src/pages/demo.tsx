const { ipcRenderer } = window.require("electron"); // https://github.com/electron/electron/issues/7300

import { useEffect, useState } from "react";
import { channels } from "../shared/constants";

export const Demo = () => {
  const [product, setProduct] = useState("");
  const [data, setData] = useState(null);

  const handleQuit = () => {
    ipcRenderer.invoke(channels.QUIT);
  };

  const getData = () => {
    // Send the event to get the data
    ipcRenderer.send(channels.GET_DATA, { product });
  };

  useEffect(() => {
    // Listen for the event
    ipcRenderer.on(channels.GET_DATA, (event, arg) => {
      console.log(arg, "what is arg in ipcRenderer.on");
      setData(arg);
    });

    // Clean the listener after the component is dismounted
    return () => {
      ipcRenderer.removeAllListeners(channels.GET_DATA);
    };
  }, []);

  return (
    <div className="p-2 border flex flex-col justify-between">
      <div className="flex gap-4">
        <input
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Product name"
          className="border px-2"
        />
        <button onClick={getData} className="bg-cyan-200 px-2 rounded-md">
          Search
        </button>
      </div>
      <div className="min-h-[100px] border my-8">
        {" "}
        {data && (
          <>
            <h3>Product info</h3>
            <ul>
              <li>Name: {data.name}</li>
              <li>Price: {data.price}</li>
              <li>Color: {data.color}</li>
            </ul>
          </>
        )}
      </div>

      <button
        onClick={handleQuit}
        className="p-1 rounded-md border text-red-500 border-red-500"
      >
        Quit app
      </button>
    </div>
  );
};
