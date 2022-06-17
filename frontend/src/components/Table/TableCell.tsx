import React from "react";
import cn from "classnames";

const TableCell = ({
  children,
  isIndex = true,
}: {
  children: React.ReactNode;
  isIndex?: boolean;
}) => {
  return (
    <td
      className={
        isIndex
          ? cn(
              "px-6",
              "py-4",
              "whitespace-nowrap",
              "text-sm",
              "font-medium",
              "text-gray-900"
            )
          : cn(
              "text-sm",
              "text-gray-900",
              "font-light",
              "px-6",
              "py-4",
              "whitespace-nowrap"
            )
      }
    >
      {children}
    </td>
  );
};

export default TableCell;
