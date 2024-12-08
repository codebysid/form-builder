import React, { ReactNode } from "react";

interface IButton {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  iconDirection?: "right" | "left";
  variant?: "outline" | "primary";
}

const Button = ({
  type = "button",
  onClick,
  className,
  disabled = false,
  children,
  icon,
  iconDirection = "right",
  variant = "primary",
}: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[32px] flex items-center justify-center gap-2  px-4 flex-row rounded-xl border outline-none focus-visible:ring-1 ${
        iconDirection === `right` && ` flex-row-reverse`
      } ${
        variant == "primary" && ` bg-xGreen border border-xDarkGreen text-white`
      }`}
      disabled={disabled}
    >
      {icon && icon}
      <span className=" text-sm font-semibold">{children}</span>
    </button>
  );
};

export default Button;
