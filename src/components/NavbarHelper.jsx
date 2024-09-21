import { useState, useEffect } from "react";

export function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the vertical direction
  const [scrollY, setScrollY] = useState(0);
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState();

  const listener = () => {
    const bodyOffset = document.body.getBoundingClientRect();
    const scrollTop = -bodyOffset.top;
    setScrollY(scrollTop);
    setScrollDirection(lastScrollTop > scrollTop ? "up" : "down");
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add the scroll listener only on the client side
      window.addEventListener("scroll", listener);
      
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  }, [lastScrollTop]); // dependency array to avoid redundant calls

  return {
    scrollY,
    scrollDirection
  };
}
