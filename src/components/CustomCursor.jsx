import React, { useEffect, useState } from "react";

const CustomCursor = ({ visible }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let timer;
    
    if (visible) {
      // Show cursor immediately when hovering
      setShowCursor(true);
      
      // Set timer to hide cursor after 3 seconds
      timer = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
    } else {
      // Hide cursor immediately when not hovering
      setShowCursor(false);
      
      // Clear any existing timer
      if (timer) {
        clearTimeout(timer);
      }
    }

    // Cleanup timer on unmount or when visible changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [visible]);

  // Don't render anything if not visible
  if (!showCursor) return null;

  const style = {
    position: "fixed",
    top: pos.y + 12,
    left: pos.x + 12,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    fontSize: "18px",
    fontWeight: "500",
    // background: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    color: "#d6b8fe",
    zIndex: 9999,
    userSelect: "none",
    transition: "all 0.2s ease",
  };

  return <div style={style}>Scroll</div>;
};

export default CustomCursor;