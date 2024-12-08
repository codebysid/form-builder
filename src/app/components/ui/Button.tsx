import React, { ReactNode } from "react";

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
  const btnVariants = {
    primary: ` bg-xGreen border border-xDarkGreen text-white `,
    outline: `border`,
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
      className={`h-[32px] flex items-center justify-center gap-2  px-4 rounded-xl outline-none focus-visible:ring-1 ${btnIconStyles[iconDirection]} ${btnVariants[variant]} ${className}`}
      disabled={disabled}
    >
      {icon && icon}
      {children && <span className=" text-sm font-semibold">{children}</span>}
    </button>
  );
};

export default Button;
