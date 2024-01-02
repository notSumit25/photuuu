"use client";

import * as React from "react";
import { useEdgeStore } from "../lib/edgestore";
import axios from "axios";

export default function ImageUpload() {
  const [file, setFile] = React.useState();
  const { edgestore } = useEdgeStore();
  const [url, setUrl] = React.useState('');

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
          onClick={async () => {
            if (file) {
              const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                  // you can use this to show a progress bar
                  console.log(progress);
                },
              });
              // you can run some server action or api here
              // to add the necessary data to your database
              setUrl(res.url)
              try {
                console.log(url);
                const data = await axios.post('/api/upload',{url});
              } catch (error) {
                console.log(error)
              }
            }
          }}
        >
          Upload
        </button>
        <div>{url}</div>
      </div>
    </div>
  );
}
