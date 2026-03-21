import React, { useEffect, useRef, useState } from "react";

const LazyLoadImage = ({ src, alt, className }) => {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the image is visible
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Load the image when 10% is visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default LazyLoadImage;
