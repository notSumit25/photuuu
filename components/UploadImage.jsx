"use client";

import * as React from "react";
import axios from "axios";  // Import Axios
import { useEdgeStore } from "../lib/edgestore";

export default function ImageUpload() {
  const [file, setFile] = React.useState();
  const { edgestore } = useEdgeStore();
  const [url, setUrl] = React.useState('');
  console.log(url);

  const handleUpload = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });

      // Update the state with the URL from the response
      setUrl(res.url);

      // Use Axios to send a POST request to your server
      try {
        const serverResponse = await axios.post('/api/upload', {
          url,  // Pass the URL to your server
          // Add any additional data you want to send
        });

        // Handle the server response as needed
        console.log(serverResponse.data);
      } catch (error) {
        // Handle errors
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="w-96 border-2 shadow-xl py-5 flex flex-col items-center justify-center gap-1">
      <div className="flex flex-col">
        <input
          className="m-2"
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <button
          className="bg-zinc-800 px-4 py-2 text-white w-36 rounded-lg mx-auto"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
