"use client";
const useMobileDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

export default useMobileDevice;
