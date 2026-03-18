"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import ArrowUp from "./icons/ArrowUp";
import classNames from "classnames";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkVisibility = () => {
      window.requestAnimationFrame(() => {
        try {
          const scrollY = window.pageYOffset || window.scrollY;

          setIsVisible(scrollY > 300);
        } catch (error) {
          console.warn("Scroll check failed:", error);
        }
      });
    };

    checkVisibility();

    window.addEventListener("scroll", checkVisibility, { passive: true });

    window.addEventListener("resize", checkVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Button
      variant="filled"
      type="primary"
      icon={<ArrowUp />}
      size="lg"
      onClick={scrollToTop}
      className={classNames({
        "fixed bottom-8 right-8 tablet:bottom-16 tablet:right-16 transition-opacity duration-300": true,
        "opacity-100": isVisible,
        "opacity-0 pointer-events-none": !isVisible,
      })}
    />
  );
};

export default ScrollToTop;
