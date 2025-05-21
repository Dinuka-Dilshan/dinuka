"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const listner = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const percentage = Math.round(scrollPercent * 100);
      setScrollPercentage(percentage > 100 ? 100 : percentage);
    };
    document.addEventListener("scroll", listner);
    return () => document.removeEventListener("scroll", listner);
  }, []);

  return (
    <div
      className="absolute top-0 left-0  h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ScrollIndicator;
