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
  ref?: RefObject<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  {
    type = "button",
    onClick,
    className,
    disabled = false,
    children,
    icon,
    iconDirection = "right",
    variant = "primary",
  },
  ref
) {
  const btnVariants = {
    primary: ` bg-xGreen border border-xDarkGreen text-white `,
    outline: `border bg-white`,
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
      className={`h-[32px] flex items-center justify-center gap-2  px-4 rounded-xl outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ${btnIconStyles[iconDirection]} ${btnVariants[variant]} ${className}`}
      disabled={disabled}
      ref={ref}
    >
      {icon && icon}
      {children && <span className=" text-sm font-semibold">{children}</span>}
    </button>
  );
});

export default Button;
