import React from "react";
import cn from "classnames";

const TableHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className={cn("text-sm", "font-medium", "text-white", "px-6", "py-4")}
    >
      {children}
    </th>
  );
};

export default TableHead;
