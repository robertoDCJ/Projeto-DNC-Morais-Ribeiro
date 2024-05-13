import { useEffect, useState } from "react";

export const useResize = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAnimationActive(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isAnimationActive;
};