"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const ServerToast = ({ msg }: { msg: string }) => {
  useEffect(() => {
    toast.info(msg);
    const timeout = setTimeout(() => {
      redirect("/");
    }, 500);

    return () => clearTimeout(timeout);
  });
  return <></>;
};

export default ServerToast;
