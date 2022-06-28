import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex",
        "items-center",
        "gap-3",
        "px-6",
        "py-2.5",
        "bg-blue-600",
        "text-white",
        "font-medium",
        "text-md",
        "leading-tight",
        "uppercase",
        "rounded",
        "shadow-md",
        "hover:bg-blue-700",
        "hover:shadow-lg",
        "focus:bg-blue-700",
        "focus:shadow-lg",
        "focus:outline-none",
        "focus:ring-0",
        "active:bg-blue-800",
        "active:shadow-lg",
        "transition",
        "duration-150",
        "ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
