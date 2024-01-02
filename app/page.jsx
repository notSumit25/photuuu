"use client";

import * as React from "react";
import { useEdgeStore } from "../lib/edgestore";

export default function Page() {
  const [file, setFile] = React.useState();
  const { edgestore } = useEdgeStore();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col">
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <button
          className="bg-zinc-800 px-4 py-2 text-white"
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
              console.log(res);
            }
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
