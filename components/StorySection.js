// components/StorySection.js

import { useRef } from "react";

export default function StorySection() {
  const sectionRef = useRef(null);

  // No animations needed; section is now a placeholder

  return (
    <>
      <section id="projects" className="storySection" ref={sectionRef}>
        {/* Projects moved to the main ProjectShowcase component; content removed. */}
      </section>

      <style jsx>{`
        .storySection {
          display: none;
        }
      `}</style>
    </>
  );
}