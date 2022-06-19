import React from "react";
import cn from "classnames";

const TableCell = ({
  children,
  isIndex = true,
  className,
}: {
  children: React.ReactNode;
  isIndex?: boolean;
  className?: string;
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
              "text-gray-900",
              className
            )
          : cn(
              "text-sm",
              "text-gray-900",
              "font-light",
              "px-6",
              "py-4",
              "whitespace-nowrap",
              className
            )
      }
    >
      {children}
    </td>
  );
};

export default TableCell;
