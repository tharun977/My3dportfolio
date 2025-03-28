import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></div>
  );
};

export default CustomCursor;
