import { LoaderIcon } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex justify-center h-[100px] items-center">
        <LoaderIcon className="animate-spin" />
      </div>
    </main>
  );
};

export default loading;
