import React from "react";
import cn from "classnames";

const Table = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className={cn("flex", "flex-col")}>
      <div className={cn("overflow-x-auto", "sm:-mx-6", "lg:-mx-8")}>
        <div
          className={cn(
            "py-4",
            "inline-block",
            "min-w-full",
            "sm:px-6",
            "lg:px-8"
          )}
        >
          <div className={cn("overflow-hidden")}>
            <table className={cn("min-w-full", "text-center")}>
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
