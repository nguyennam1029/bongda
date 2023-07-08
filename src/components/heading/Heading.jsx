import React from "react";

const Heading = ({ children }) => {
  return (
    <div>
      <h2 className="text-[#ea0000] font-extrabold my-[10px]">{children}</h2>
    </div>
  );
};

export default Heading;
