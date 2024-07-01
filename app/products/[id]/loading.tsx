import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

const loading = () => {
  return (
    <div className="animate-pulse p-5 flex flex-col gap-5">
      <div className="aspect-square border-neutral-700 text-neutral-700 border-4 border-dashed rounded-md flex items-center justify-center">
        <PhotoIcon className="h-28" />
      </div>
      <div className="flex gap-2 items-center ">
        <div className="size-14 bg-neutral-700 rounded-full" />
        <div className="flex flex-col gap-1">
          <div className="h-5 bg-neutral-700 rounded-md w-40" />
          <div className="h-5 bg-neutral-700 rounded-md w-20" />
        </div>
      </div>
      <div className="h-5 bg-neutral-700 rounded-md w-80" />
    </div>
  );
};

export default loading;
