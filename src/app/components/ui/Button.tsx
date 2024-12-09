import React, { forwardRef, ReactNode, RefObject } from "react";

interface IButton {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  iconDirection?: "right" | "left";
  variant?: "outline" | "primary" | "ghost";
}

function Button({
  type = "button",
  onClick,
  className,
  disabled = false,
  children,
  icon,
  iconDirection = "right",
  variant = "primary",
}: IButton) {
  const btnVariants = {
    outline: "border bg-white",
    primary: "bg-xGreen border border-xDarkGreen text-white",
    ghost: "border-none",
  };
  const btnIconStyles = {
    right: `flex-row-reverse`,
    left: "flex-row",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={` whitespace-nowrap h-[32px] flex items-center justify-center gap-1 lg:gap-2 px-2 lg:px-4 rounded-xl outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ${btnIconStyles[iconDirection]} ${btnVariants[variant]} ${className}`}
      disabled={disabled}
    >
      {icon && icon}
      {
        <span className="text-sm font-semibold text-center w-fit">
          {children}
        </span>
      }
    </button>
  );
}

export default Button;
