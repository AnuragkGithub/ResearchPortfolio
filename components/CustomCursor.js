import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    if (!pointerQuery.matches || !cursorRef.current) return undefined;

    const cursor = cursorRef.current;
    const interactiveSelector = "a, button, [role='button'], [data-cursor]";

    const moveCursor = (event) => {
      if (event.pointerType === "touch") return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };

    const setCursorTarget = (event) => {
      const element = event.target instanceof Element ? event.target : null;
      const target = element?.closest(interactiveSelector);
      if (!target) return;

      const label =
        target.getAttribute("data-cursor") ||
        (target.tagName === "BUTTON" ? "SELECT" : "OPEN");
      cursor.dataset.label = label;
      cursor.classList.add("is-interactive");
    };

    const clearCursorTarget = (event) => {
      const element = event.target instanceof Element ? event.target : null;
      const target = element?.closest(interactiveSelector);
      if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) {
        return;
      }
      cursor.classList.remove("is-interactive", "is-pressed");
    };

    const hideCursor = () => cursor.classList.remove("is-visible", "is-interactive", "is-pressed");
    const pressCursor = () => cursor.classList.add("is-pressed");
    const releaseCursor = () => cursor.classList.remove("is-pressed");

    document.body.classList.add("customCursorEnabled");
    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    window.addEventListener("pointerdown", pressCursor);
    window.addEventListener("pointerup", releaseCursor);
    document.addEventListener("pointerover", setCursorTarget);
    document.addEventListener("pointerout", clearCursorTarget);

    return () => {
      document.body.classList.remove("customCursorEnabled");
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
      document.removeEventListener("pointerover", setCursorTarget);
      document.removeEventListener("pointerout", clearCursorTarget);
    };
  }, []);

  return <div ref={cursorRef} className="customCursor" aria-hidden="true" />;
}