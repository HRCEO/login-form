import TabBar from "@/components/TabBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
};

export default layout;
