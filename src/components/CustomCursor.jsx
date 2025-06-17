import React, { useEffect, useState } from "react";

const CustomCursor = ({ visible }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const style = {
    position: "fixed",
    top: pos.y + 12,
    left: pos.x + 12,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    fontSize: "18px",
    fontWeight: "bold",
    // background: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    color: "#333",
    zIndex: 9999,
    userSelect: "none",
    opacity: visible ? 1 : 0,
    visibility: visible ? "visible" : "hidden", // Prevents interaction when hidden
    transition: "opacity 0.2s ease, visibility 0.2s ease",
  };

  return <div style={style}>Scroll</div>;
};

export default CustomCursor;