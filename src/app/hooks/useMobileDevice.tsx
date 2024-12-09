"use client";

import { useEffect, useState } from "react";

const useMobileDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);
  return isMobile;
};

export default useMobileDevice;
