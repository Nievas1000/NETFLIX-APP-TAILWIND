import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const useCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;
      const scrollLeft = carousel.scrollLeft;

      gsap.to(carousel, {
        duration: 0.5,
        scrollLeft:
          scrollLeft - clientWidth <= 0
            ? scrollWidth
            : scrollLeft - clientWidth,
        ease: "power2.out",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;
      const scrollLeft = carousel.scrollLeft;

      gsap.to(carousel, {
        duration: 0.5,
        scrollLeft:
          scrollLeft + clientWidth >= scrollWidth
            ? 0
            : scrollLeft + clientWidth,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const cloneFirstItems = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const firstItems = carousel.querySelectorAll(".carousel-item");
        const lastItems = Array.from(firstItems).map((item) =>
          item.cloneNode(true)
        );
        lastItems.forEach((item) => carousel.appendChild(item));
      }
    };

    const cloneLastItems = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const lastItems = carousel.querySelectorAll(
          ".carousel-item:last-child"
        );
        const firstItems = Array.from(lastItems).map((item) =>
          item.cloneNode(true)
        );
        firstItems.forEach((item) =>
          carousel.insertBefore(item, carousel.firstChild)
        );
      }
    };
    cloneFirstItems();
    cloneLastItems();
  }, []);

  return [carouselRef, scrollLeft, scrollRight];
};
