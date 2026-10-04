import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />

      <style jsx>{`
        .cursor {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          backdrop-filter: blur(4px);
          transition: transform 0.08s linear;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          background: transparent;
        }
      `}</style>
    </>
  );
}